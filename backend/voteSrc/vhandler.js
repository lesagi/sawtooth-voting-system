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

const VotePayload = require("./payload");

const { CAMP_NAMESPACE, CAMP_FAMILY } = require("./family");
const VoteState = require("./state");

const { TransactionHandler } = require("sawtooth-sdk/processor/handler");
const { InvalidTransaction } = require("sawtooth-sdk/processor/exceptions");

const _createCampaign = (campaignState, campaignName) => {
  return campaignState.getGame(campaignName).then((campaign) => {
    if (campaign !== undefined) {
      throw new InvalidTransaction("Invalid Action: Game already exists.");
    }

    let createdCampaign = {
      name: campaignName,
      parties: "",
      count: "",
      state: "OPEN",
    };

    _display(
      `Player ${player.toString().substring(0, 6)} created game ${name}`
    );

    return xoState.setGame(name, createdGame);
  });
};

class VoteHandler extends TransactionHandler {
  constructor() {
    super(CAMP_FAMILY, ["1.0"], [CAMP_NAMESPACE]);
  }
  apply(transactionProcessRequest, context) {
    let payload = VotePayload.fromBytes(transactionProcessRequest.payload);
    let campaignState = new VoteState(context);
    let header = transactionProcessRequest.header;
    let voter = header.signerPublicKey;
    const { campaignName, action, party } = payload;
    if (action === "create_campaign") {
      return _createCampaign(campaignState, campaignName);
    } else if (action === "vote") {
      return _vote(campaignState, campaignName, voter, party);
    } else {
      throw new InvalidTransaction(
        `Action must be create, delete, or take not ${action}`
      );
    }
  }
}

module.exports = VoteHandler;
