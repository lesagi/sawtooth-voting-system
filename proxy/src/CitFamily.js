const { _hash } = require("./utils");

const CIT_FAMILY = "citizens_list";
const CIT_NAMESPACE = _hash(CIT_FAMILY).substring(0, 6);
const _makeCitizenAddress = (x) => CIT_NAMESPACE + _hash(x);

module.exports = {
  CIT_FAMILY,
  CIT_NAMESPACE,
  _makeCitizenAddress,
};
