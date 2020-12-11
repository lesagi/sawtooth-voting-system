const { createContext, CryptoFactory } = require("sawtooth-sdk/signing");
const { protobuf } = require("sawtooth-sdk");
const { TextEncoder } = require("text-encoding/lib/encoding");
const { Secp256k1PrivateKey } = require("sawtooth-sdk/signing/secp256k1");
const crypto = require("crypto");
const fetch = require("node-fetch");
const { CAMP_FAMILY, _makeCampaignAddress } = require("./family");

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

// submit a batch and returns an object of the following fields:
// link (GET//batch_statuses API link)
// success
// id: of the batch
const submitBatch = async (batch) => {
  const batchListBytes = protobuf.BatchList.encode({
    batches: [batch],
  }).finish();

  try {
    if (batchListBytes == null) {
      //endpoint used to retrieve data from an address in Sawtooth blockchain
      let response = await fetch(`http://localhost:8008/state/${this.address}`);
      let responseJson = await response.json();
      var data = responseJson.data;
      var newdata = Buffer.from(data, "base64").toString();
      return newdata;
    } else {
      let resp = await fetch("http://localhost:8008/batches", {
        //endpoint to which we write data in a Sawtooth blockchain
        method: "POST",
        headers: { "Content-Type": "application/octet-stream" },
        body: batchListBytes,
      });
      let res = await resp.json();
      res.success = true;
      res.id = new URL(res.link).searchParams.get("id");
      return res;
    }
  } catch (error) {
    console.log("error in fetch", error);
    return {
      success: false,
      error,
    };
  }
};

const perpareBatch = (signer, op) => {
  const createTransaction = (payload) => {
    const [name] = payload.split(",");
    const encoder = new TextEncoder("utf8");
    const payloadBytes = encoder.encode(payload);
    const transactionHeaderBytes = protobuf.TransactionHeader.encode({
      familyName: CAMP_FAMILY,
      familyVersion: "1.0",
      inputs: [_makeCampaignAddress(name)],
      outputs: [_makeCampaignAddress(name)],
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
      nonce: "" + Math.random(),
      payload_encoding: "utf8",
      payloadSha512: crypto
        .createHash("sha512")
        .update(payloadBytes)
        .digest("hex"),
    }).finish();

    // const signature = signer.sign(transactionHeaderBytes);

    const transaction = protobuf.Transaction.create({
      header: transactionHeaderBytes,
      headerSignature: signer.sign(transactionHeaderBytes),
      payload: payloadBytes,
    });
    return transaction;
  };

  const createBatch = (transactions) => {
    const batchHeaderBytes = protobuf.BatchHeader.encode({
      signerPublicKey: signer.getPublicKey().asHex(),
      transactionIds: transactions.map((txn) => txn.headerSignature),
    }).finish();

    // const signature = signer.sign(batchHeaderBytes);

    const batch = protobuf.Batch.create({
      header: batchHeaderBytes,
      headerSignature: signer.sign(batchHeaderBytes),
      transactions: transactions,
    });
    return batch;
  };

  return createBatch([createTransaction(op)]);
};

// getting the batch status (deconstruct the response)
const getBatchStatus = async (id) => {
  try {
    const statusReq = await fetch(
      `http://localhost:8008/batch_statuses?id=${id}`
    );
    const status = await statusReq.json();
    // TODO: -- Assuming there's only one transaction to a batch its status.data[0], otherwise: status.data
    return status.data[0];
  } catch (e) {}
};

// Gets the transactions that was submitted with the batch
// and decode the payload to human-readable format
const getSubmittedTransPerBatch = async (batch_id) => {
  try {
    const batchReq = await fetch(`http://localhost:8008/batches/${batch_id}`, {
      method: "GET",
    });
    const batch = await batchReq.json();
    const transactions = batch.data.transactions.map((transaction) => {
      return {
        ...transaction,
        payload: Buffer.from(transaction.payload, "base64").toString(),
      };
    });
    return transactions;
  } catch (e) {}
};

const userSigner = generateSigner(
  "654798e3cb9be0d6b2761db768169bc1677f3a20156172ebff1381a2c9afe4a6"
);

const submittedBatch = submitBatch(perpareBatch(userSigner, `2024,create,_,_`));
submittedBatch.then((res) => {
  console.log(res);

  getBatchStatus(res.id).then((resStatus) => console.log(resStatus));
});
getSubmittedTransPerBatch(
  "6b71b35218b53f3cc08322b5f23940be0cd757f0b90236ed91034b3e6546015f72e524e85f949cc722b4d17f22fb102c0916ed1f5b07b578df5d2d75a31e7286"
).then((resStatus) => console.log(resStatus));

// submitBatch(perpareBatch(userSigner, `2021,add_party,likud,_`));
// submitBatch(perpareBatch(userSigner, `2021,open,_,_`));
// submitBatch(perpareBatch(userSigner, `2021,vote,likud,0`));
// submitBatch(perpareBatch(userSigner, `2021,add_admin,_,1sdk23jd`));
// submitBatch(perpareBatch(userSigner, `2021,remove_admin,_,1sdk23jd`));
// submitBatch(perpareBatch(userSigner, `2021,close,likud,0`));
