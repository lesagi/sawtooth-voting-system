const { _hash } = require("../utils");

const CIT_FAMILY = "citizens_list";
const CIT_NAMESPACE = _hash(CIT_FAMILY).substring(0, 6);
const _makeCitizenAddress = (x) => CIT_NAMESPACE + _hash(x);

const _deserialize = (data) => {
  let iterable = data.split("|").map((stateStr) => stateStr.split(","));
  return new Map(iterable);
};

const _serialize = (lists) => {
  return Buffer.from(lists.join("|"));
};

module.exports = {
  CIT_FAMILY,
  CIT_NAMESPACE,
  _makeCitizenAddress,
  _deserialize,
  _serialize,
};
