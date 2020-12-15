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

const {
  _deserialize,
  _serialize,
  _makeCitizenAddress,
} = require("./citizen_family");

class CitizenList {
  constructor(context) {
    this.context = context;
    this.addressCache = new Map([]);
    this.timeout = 500;
  }

  _loadCitizenList(name) {
    let address = _makeCitizenAddress(name);
    if (this.addressCache.has(address)) {
      return this.addressCache.get(address) === null
        ? Promise.resolve(new Map([]))
        : Promise.resolve(_deserialize(this.addressCache.get(address)));
    } else {
      return this.context
        .getState([address], this.timeout)
        .then((addressValues) => {
          if (!addressValues[address].toString()) {
            this.addressCache.set(address, null);
            return new Map([]);
          } else {
            let data = addressValues[address].toString();
            this.addressCache.set(address, data);
            return _deserialize(data);
          }
        });
    }
  }

  getCitizenList(name) {
    return this._loadCitizenList(name).then((citizens) => citizens.get(name));
  }

  setCitizenList(name, count) {
    let address = _makeCitizenAddress(name);

    return this._loadCitizenList(name)
      .then((lists) => {
        lists.set(name, lists);
        return lists;
      })
      .then((lists) => {
        let data = _serialize(lists);
        this.addressCache.set(address, data);
        let entries = {
          [address]: data,
        };
        return this.context.setState(entries, this.timeout);
      });
  }
}

module.exports = {
  CitizenList,
};
