const XO_FAMILY = "votingSystem";
const XO_NAMESPACE = _hash(XO_FAMILY).substring(0, 6);
const _makeXoAddress = (x) => XO_NAMESPACE + _hash(x);

module.exports = {
  XO_NAMESPACE,
  XO_FAMILY,
  _makeXoAddress,
};
