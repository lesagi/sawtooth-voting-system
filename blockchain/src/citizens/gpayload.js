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

class CitizenPayload {
  constructor(id, ballot) {
    this.id = id;
    this.ballot = ballot;
  }

  static fromBytes(bytesPayload) {
    bytesPayload = decoder.decode(bytesPayload).split(",");
    if (!bytesPayload.length == 3) {
      throw new InvalidTransaction("Invalid payload serialization");
    }
    const [id, ballot] = bytesPayload;
    let payload = new CitizenPayload(id, ballot);
    if (!payload.id) {
      throw new InvalidTransaction("ID is required");
    }
    return payload;
  }
}

module.exports = CitizenPayload;
