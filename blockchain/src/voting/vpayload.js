/**
 * Copyright 2018 Intel Corporation
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
const { TextDecoder } = require("text-encoding/lib/encoding");
const { InvalidTransaction } = require("sawtooth-sdk/processor/exceptions");
const decoder = new TextDecoder("utf8");

class CampaignPayload {
  constructor(name, action, party) {
    this.name = name;
    this.action = action;
    this.party = party;
  }

  static fromBytes(payload) {
    payload = decoder.decode(payload).split(",");
    if (payload.length === 4) {
      const [name, action, party] = payload;
      let campPayload = new CampaignPayload(name, action, party);
      if (!campPayload.name) {
        throw new InvalidTransaction("Name is required");
      }
      if (campPayload.name.indexOf("|") !== -1) {
        throw new InvalidTransaction('Name cannot contain "|"');
      }

      if (!campPayload.action) {
        throw new InvalidTransaction("Action is required");
      }
      return campPayload;
    } else {
      throw new InvalidTransaction("Invalid payload serialization");
    }
  }
}

module.exports = CampaignPayload;
