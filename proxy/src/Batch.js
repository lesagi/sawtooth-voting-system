const { protobuf } = require("sawtooth-sdk");
const fetch = require("node-fetch");

const createBatchHeader = (signer, transactions) => {
  const batchHeaderBytes = protobuf.BatchHeader.encode({
    signerPublicKey: signer.getPublicKey().asHex(),
    transactionIds: transactions.map((txn) => txn.headerSignature),
  }).finish();
  return batchHeaderBytes;
};

const createBatch = (signer, batchHeaderBytes, transactions) =>
  protobuf.Batch.create({
    header: batchHeaderBytes,
    headerSignature: signer.sign(batchHeaderBytes),
    transactions: transactions,
  });

// submit a batch and returns an array of objects with the following fields:
// link (GET//batch_statuses API link)
// success
// id: of the batch
const submitBatch = async (batches) => {
  const batchListBytes = protobuf.BatchList.encode({
    batches,
  }).finish();

  try {
    if (batchListBytes == null) {
      //endpoint used to retrieve data from an address in Sawtooth blockchain
      let response = await fetch(
        `${process.env.BLOCKCHAIN_ADDR}/state/${this.address}`
      );
      let responseJson = await response.json();
      var data = responseJson.data;
      var newdata = Buffer.from(data, "base64").toString();
      return newdata;
    } else {
      let resp = await fetch(`${process.env.BLOCKCHAIN_ADDR}/batches`, {
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

// getting the batch status (deconstruct the response)
const getBatchStatus = async (id) => {
  try {
    const statusReq = await fetch(
      `${process.env.BLOCKCHAIN_ADDR}/batch_statuses?id=${id}`
    );
    const status = await statusReq.json();
    // !-- Assuming there's only one transaction to a batch its status.data[0], otherwise: status.data
    return status.data[0];
  } catch (e) {}
};

// Gets the transactions that was submitted with the batch
// and decode the payload to human-readable format
const getSubmittedBatchTransactions = async (batch_id) => {
  try {
    const batchReq = await fetch(
      `${process.env.BLOCKCHAIN_ADDR}/batches/${batch_id}`,
      {
        method: "GET",
      }
    );
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

module.exports = {
  createBatchHeader,
  createBatch,
  submitBatch,
  getBatchStatus,
  getSubmittedBatchTransactions,
};
