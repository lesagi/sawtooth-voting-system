const { protobuf } = require('sawtooth-sdk');
const { TextEncoder } = require('text-encoding/lib/encoding');
const crypto = require('crypto');

const createTransactionHeader = (
  familyName,
  nameToAddressGen,
  signer,
  payload,
) => {
  const [name] = payload.split(',');
  const encoder = new TextEncoder('utf8');
  const payloadBytes = encoder.encode(payload);
  const transactionHeaderBytes = protobuf.TransactionHeader.encode({
    familyName,
    familyVersion: '1.0',
    inputs: [nameToAddressGen(name)],
    outputs: [nameToAddressGen(name)],
    signerPublicKey: signer.getPublicKey().asHex(),
    // In this example, we're signing the batch with the same private key,
    // but the batch can be signed by another party, in which case, the
    // public key will need to be associated with that key.
    batcherPublicKey: signer.getPublicKey().asHex(),
    // In this example, there are no dependencies.  This list should include
    // an previous transaction header signatures that must be applied for
    // this transaction to successfully commit.
    // For example,
    // dependencies: ['540a6803971d1880ec73a96cb97815a95d374cbad5d865925e5aa0432fcf1931539afe10310c122c5eaae15df61236079abbf4f258889359c4d175516934484a'],
    dependencies: [],
    nonce: '' + Math.random(),
    payload_encoding: 'utf8',
    payloadSha512: crypto
      .createHash('sha512')
      .update(payloadBytes)
      .digest('hex'),
  }).finish();
  return { transactionHeaderBytes, payloadBytes };
};

const createTransaction = (signer, transactionHeaderBytes, payloadBytes) => {
  return protobuf.Transaction.create({
    header: transactionHeaderBytes,
    headerSignature: signer.sign(transactionHeaderBytes),
    payload: payloadBytes,
  });
};

module.exports = {
  createTransactionHeader,
  createTransaction,
};
