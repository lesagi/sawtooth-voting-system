const { createContext, CryptoFactory } = require("sawtooth-sdk/signing");
const { Secp256k1PrivateKey } = require("sawtooth-sdk/signing/secp256k1");

const generateSigner = (privateKeyHex) => {
  const context = createContext("secp256k1");
  const cryptoFact = new CryptoFactory(context);
  const privateKey = privateKeyHex
    ? Secp256k1PrivateKey.fromHex(privateKeyHex.trim())
    : context.newRandomPrivateKey();
  console.log(privateKey.asHex());
  const signer = cryptoFact.newSigner(privateKey);
  return signer;
};

module.exports = {
  generateSigner,
};
