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

const axios = require("axios");
const { TransactionHandler } = require("sawtooth-sdk/processor/handler");
const { InvalidTransaction } = require("sawtooth-sdk/processor/exceptions");

const CampaignPaylod = require("./vpayload");
const { CampaignState } = require("./vstate");
const {
  CAMP_NAMESPACE,
  CAMP_FAMILY,
  _campaignToString,
} = require("./camp_family");
const { _display } = require("../utils");

const _verifyVoter = async (voterPubKey) => {
  const res = await axios.get(`${process.env.BLOCKCHAIN_ADDR}/batches`);
  const batches = res.data.data;
  for (const batch of batches) {
    const { transactions } = batch;
    for (const transaction of transactions) {
      const { signer_public_key, family_name } = transaction.header;
      if (signer_public_key === voterPubKey && family_name === CAMP_FAMILY) {
        throw new InvalidTransaction(
          `"Invalid Action: This voter already voted: ${voterPubKey
            .toString()
            .substring(0, 6)}`
        );
      }
    }
  }
  return true;
};

const _createCampaign = (campaignState, campaignName) => {
  return campaignState.getCampaign(campaignName).then((campaign) => {
    if (campaign !== undefined) {
      throw new InvalidTransaction("Invalid Action: Campaign already exists.");
    }

    let createdCampaign = {
      name: campaignName,
      parties: undefined,
      count: undefined,
      state: "SETUP",
    };

    _display(`Campaign ${campaignName} was created`);

    return campaignState.setCampaign(campaignName, createdCampaign);
  });
};

const _vote = (campaignState, campaignName, voterPubKey, party) => {
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
    if (!voterPubKey) {
      throw new InvalidTransaction("Invalid Action: Voter is not recognized.");
    }

    const partyIndex = parties.indexOf(party);

    // BREAKING current count to add the vote
    let currentCount = count.split(",").map((num) => parseInt(num));

    //
    //--------------- NEED TO CHECK IF VOTER ALREADY VOTED -----------------------
    //

    return _verifyVoter(voterPubKey)
      .then((res) => {
        if (res) {
          currentCount[partyIndex]++;
          // COLLAPSING back to comma-seperated list
          campaign.count = currentCount.join(",");

          let voterString = voterPubKey.toString().substring(0, 6);
          _display(
            `Voter ${voterString} succefully voted to: ${party}\n\n${_campaignToString(
              campaign
            )}`
          );
          console.log(campaign);
          return campaignState.setCampaign(campaignName, campaign);
        }
      })
      .catch((e) => console.log(e));
  });
};

const _verifyAdmin = (campaign, admin) => {
  // {
  //   "privateKey": "3dca5bb233242e9ebe188bc89005ccc81c17422f1fa20a5b6fc566b72d43e5a2",
  //   "publicKey": "03998d071ea09eea282f986429887a2693b017f6d122a2c95887df21fa006bae92"
  // }
  // {
  //   "privateKey": "982fe507f3e5d9d35d548a2b66e7319cd5034ff61abc82a7446e8a547268d291",
  //   "publicKey": "03c95695f6acabd711817469b1c4e5f8895c537664876f318c8de402caeef6184e"
  // }
  // {
  //   "privateKey": "82156f0c52cf239fb52da067cb2c9d3abe5c8cddf048e0399c89bf67092f5fb4",
  //   "publicKey": "038aac7f2bb672f3a4ec2f5c64d8766bbcabc8a71d63f9af060273f8e2f62e6636"
  // }
  let { admins } = campaign;
  if (!admin) {
    throw new InvalidTransaction(
      `Invalid Action: No admin identification was passed.`
    );
  }
  // maybe admins should pass more that their key for authnetication, for example a 16-letters password and it's hash result
  // for the concatenated string and the the hashing should take place here to make sure its result is as should be
  // so for example, admins will be:
  // [
  //   {
  //     key: `03998d071ea09eea282f986429887a2693b017f6d122a2c95887df21fa006bae92`,
  //     hash: `0ds9f0sdf90249fsd9f0jfw40fjdsf8` // the result of hashing `${key}${password}`
  //   }
  // ]
  admins = [
    `03998d071ea09eea282f986429887a2693b017f6d122a2c95887df21fa006bae92`,
    `03c95695f6acabd711817469b1c4e5f8895c537664876f318c8de402caeef6184e`,
    `038aac7f2bb672f3a4ec2f5c64d8766bbcabc8a71d63f9af060273f8e2f62e6636`,
  ];
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
  return true;
};

const _close = (campaignState, campaignName, admin) => {
  return campaignState.getCampaign(campaignName).then((campaign) => {
    _verifyAdmin(campaign, admin);
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

const _modifyPartyList = (campaignState, campaignName, admin, party, cmd) => {
  return campaignState.getCampaign(campaignName).then((campaign) => {
    _verifyAdmin(campaign, admin);
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
    _verifyAdmin(campaign, admin);
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
    const { name, action, party } = payload;
    if (action === "create") {
      return _createCampaign(campaignState, name);
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
        `The action '${action}' is not listed as a legal action`
      );
    }
  }
}

module.exports = CampaignHandler;

// const _modifyAdminList = (
//   campaignState,
//   campaignName,
//   admin,
//   otherAdminAddr,
//   cmd //can be either "add_admin" or "remove_admin"
// ) => {
//   return campaignState.getCampaign(campaignName).then((campaign) => {
//     let admins = _verifyandParseAdmins(campaign, admin);

//     if (cmd === "add") {
//       if (!admins.includes(otherAdminAddr)) {
//         admins.push(otherAdminAddr);
//       }
//     } else if (cmd === "remove") {
//       if (admins.includes(otherAdminAddr)) {
//         admins.splice(admins.indexOf(otherAdminAddr), 1);
//       }
//     }
//     campaign.admins = admins.join(",");
//     return campaignState.setCampaign(campaignName, campaign);
//   });
// };
