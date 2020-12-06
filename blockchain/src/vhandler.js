/**
 * Copyright 2017-2018 Intel Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */

"use strict";

const CampaignPaylod = require("./vpayload");

const { CAMP_NAMESPACE, CAMP_FAMILY, _campaignToString } = require("./family");
const { CampaignState } = require("./vstate");
const { _display } = require("./utils");
const { TransactionHandler } = require("sawtooth-sdk/processor/handler");
const { InvalidTransaction } = require("sawtooth-sdk/processor/exceptions");

const _createCampaign = (campaignState, campaignName, admin) => {
  return campaignState.getCampaign(campaignName).then((campaign) => {
    if (campaign !== undefined) {
      throw new InvalidTransaction("Invalid Action: Campaign already exists.");
    }

    let createdCampaign = {
      name: campaignName,
      parties: undefined,
      count: undefined,
      state: "SETUP",
      admins: admin,
    };

    const adminString = admin.toString().substring(0, 6);
    _display(`Admin ${adminString} created the campaign ${campaignName}`);

    return campaignState.setCampaign(campaignName, createdCampaign);
  });
};

const _vote = (campaignState, campaignName, voter, party) => {
  return campaignState.getCampaign(campaignName).then((campaign) => {
    let { state, count, parties } = campaign;

    if (["CLOSED", "SETUP", "SUSPENDED"].includes(state)) {
      throw new InvalidTransaction(
        "Invalid Action: Campaign is unavailable for voting."
      );
    }

    parties = parties.split(",");
    //INPUT VALIDATION
    if (!parties.includes(party)) {
      throw new InvalidTransaction("Invalid party " + party);
    }
    if (campaign === undefined) {
      throw new InvalidTransaction(
        "Invalid Action: Vote requires an existing campaign."
      );
    }
    if (!voter) {
      throw new InvalidTransaction(
        "Invalid Action: Voter can't be recognized."
      );
    }

    const partyIndex = parties.indexOf(party);

    // BREAKING current count to add the vote
    let currentCount = count.split(",").map((num) => parseInt(num));

    //
    //--------------- NEED TO CHECK IF VOTER ALREADY VOTED -----------------------
    //
    if (true) {
      currentCount[partyIndex]++;
    } else {
      throw new InvalidTransaction(
        `"Invalid Action: This voter already voted: ${voter
          .toString()
          .substring(0, 6)}`
      );
    }

    // COLLAPSING back to comma-seperated list
    campaign.count = currentCount.join(",");

    let voterString = voter.toString().substring(0, 6);
    _display(
      `Voter ${voterString} succefully voted to: ${party}\n\n${_campaignToString(
        campaign
      )}`
    );

    return campaignState.setCampaign(campaignName, campaign);
  });
};

const _verifyandParseAdmins = (campaign, admin) => {
  let { admins } = campaign;
  if (!admin) {
    throw new InvalidTransaction(
      `Invalid Action: No admin identification was passed.`
    );
  }
  admins = admins.split(",");
  if (!admins || admins.length == 0) {
    throw new InvalidTransaction(
      `Invalid Action: No admins is listed to manage this campaign.`
    );
  }
  if (!admins.includes(admin)) {
    throw new InvalidTransaction(
      `Invalid Action: User ${admin
        .toString()
        .substring(
          0,
          6
        )} doesn't have sufficient permissions to perform this kind of operation.`
    );
  }
  return admins;
};

const _close = (campaignState, campaignName, admin) => {
  return campaignState.getCampaign(campaignName).then((campaign) => {
    _verifyandParseAdmins(campaign, admin);
    campaign.state = "CLOSED";
    _display(
      `Campaign is closed with the following results:\n\n${_campaignToString(
        campaign
      )}`
    );
    _display("_close\n\n" + JSON.stringify(campaign, undefined, 4));
    return campaignState.setCampaign(campaignName, campaign);
  });
};

const _modifyAdminList = (
  campaignState,
  campaignName,
  admin,
  otherAdminAddr,
  cmd
) => {
  return campaignState.getCampaign(campaignName).then((campaign) => {
    let admins = _verifyandParseAdmins(campaign, admin);

    if (cmd === "add") {
      if (!admins.includes(otherAdminAddr)) {
        admins.push(otherAdminAddr);
      }
    } else if (cmd === "remove") {
      if (admins.includes(otherAdminAddr)) {
        admins.splice(admins.indexOf(otherAdminAddr), 1);
      }
    }
    campaign.admins = admins.join(",");
    return campaignState.setCampaign(campaignName, campaign);
  });
};

const _modifyPartyList = (campaignState, campaignName, admin, party, cmd) => {
  return campaignState.getCampaign(campaignName).then((campaign) => {
    _verifyandParseAdmins(campaign, admin);
    let { state, parties, count } = campaign;
    parties = parties ? parties.split(",") : [];
    count = count ? count.split(",") : [];
    const partyInList = parties.includes(party);

    const sum = count.reduce((acc, curr) => acc + parseInt(curr), 0);

    if (sum !== 0 || ["CLOSED", "OPEN"].includes(state)) {
      throw new InvalidTransaction(
        `Invalid Action: Changing parties list is not allowed in the current state, or voting has started`
      );
    }
    if (cmd === "add" && !partyInList) {
      parties.push(party);
      count.push(0);
    } else if (cmd === "remove" && partyInList) {
      const partyIndex = parties.indexOf(party);
      parties.splice(partyIndex, 1);
      count.splice(partyIndex, 1);
    } else {
      throw new InvalidTransaction(
        `Invalid Action: Requested operation is illegal, can't ${cmd} party that is ${
          !partyInList ? "not" : ""
        } in the list.`
      );
    }

    campaign.parties = parties.join(",");
    campaign.count = count.join(",");
    return campaignState.setCampaign(campaignName, campaign);
  });
};

const _modifyRunningCampaignState = (
  campaignState,
  campaignName,
  admin,
  newState
) => {
  return campaignState.getCampaign(campaignName).then((campaign) => {
    _verifyandParseAdmins(campaign, admin);
    let { state } = campaign;
    if (["CLOSED"].includes(state)) {
      throw new InvalidTransaction(
        `Invalid Action: Can't change current campaign status, as the current state is: ${state}.`
      );
    }

    campaign.state = newState.toUpperCase();
    _display("_modifyState\n\n" + JSON.stringify(campaign, undefined, 4));
    return campaignState.setCampaign(campaignName, campaign);
  });
};

class CampaignHandler extends TransactionHandler {
  constructor() {
    super(CAMP_FAMILY, ["1.0"], [CAMP_NAMESPACE]);
  }
  apply(transactionProcessRequest, context) {
    let payload = CampaignPaylod.fromBytes(transactionProcessRequest.payload);
    let campaignState = new CampaignState(context);
    let header = transactionProcessRequest.header;
    let userPubKey = header.signerPublicKey;
    const { name, action, party, adminAddr } = payload;
    if (action === "create") {
      return _createCampaign(campaignState, name, userPubKey);
    } else if (action === "open" || action === "suspend") {
      return _modifyRunningCampaignState(
        campaignState,
        name,
        userPubKey,
        action
      );
    } else if (action === "vote") {
      return _vote(campaignState, name, userPubKey, party);
    } else if (action === "close") {
      return _close(campaignState, name, userPubKey);
    } else if (action === "add_admin" || action === "remove_admin") {
      return _modifyAdminList(
        campaignState,
        name,
        userPubKey,
        adminAddr,
        action.substring(0, action.indexOf("_"))
      );
    } else if (action === "add_party" || action === "remove_party") {
      return _modifyPartyList(
        campaignState,
        name,
        userPubKey,
        party,
        action.substring(0, action.indexOf("_"))
      );
    } else {
      throw new InvalidTransaction(
        `Action must be create, delete, or take not ${action}`
      );
    }
  }
}

module.exports = CampaignHandler;
