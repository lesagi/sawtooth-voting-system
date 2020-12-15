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

const CitizenPayload = require("./gpayload");
const { CIT_NAMESPACE, CIT_FAMILY } = require("./citizen_family");

const _verifyVoter = async (id) => {
  const res = await axios.get(`${process.env.BLOCKCHAIN_ADDR}/batches`);
  const batches = res.data.data;
  for (const batch of batches) {
    const { transactions } = batch;
    for (const transaction of transactions) {
      const { header, payload } = transaction;
      const { family_name } = header;
      if (family_name === CIT_FAMILY) {
        const decoded = Buffer.from(payload, "base64").toString();
        const [transId, transBallot] = decoded.split(",");
        if (id === transId) {
          throw new InvalidTransaction(
            `"Invalid Action: Voter ${id} already checked-in in ballot no.${transBallot}`
          );
        }
      }
    }
  }
  return true;
};

class CitizenHandler extends TransactionHandler {
  constructor() {
    super(CIT_FAMILY, ["1.0"], [CIT_NAMESPACE]);
  }
  apply(transactionProcessRequest, context) {
    let payload = CitizenPayload.fromBytes(transactionProcessRequest.payload);
    const { id } = payload;
    _verifyVoter(id).catch((e) => console.log(e));
  }
}

module.exports = CitizenHandler;

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
