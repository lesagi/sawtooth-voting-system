const { createContext, CryptoFactory } = require("sawtooth-sdk/signing");
const { Secp256k1PrivateKey } = require("sawtooth-sdk/signing/secp256k1");

const context = createContext("secp256k1");

const generateKeys = () => {
  const privateKey = context.newRandomPrivateKey();
  const publicKey = context.getPublicKey(privateKey);
  return { privateKey, publicKey };
};

const generateSigner = (privateKeyHex) => {
  const privateKey = Secp256k1PrivateKey.fromHex(privateKeyHex.trim());
  const cryptoFact = new CryptoFactory(context);
  const signer = cryptoFact.newSigner(privateKey);
  return signer;
};

module.exports = {
  generateKeys,
  generateSigner,
};
