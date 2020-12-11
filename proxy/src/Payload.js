const {
  createTransactionHeader,
  createTransaction,
} = require("../src/Transaction");
const { CAMP_FAMILY, _makeCampaignAddress } = require("./Family");
const { createBatchHeader, createBatch, submitBatch } = require("./Batch");

const sendPayload = async (signer, payload) => {
  const { transactionHeaderBytes, payloadBytes } = createTransactionHeader(
    CAMP_FAMILY,
    _makeCampaignAddress,
    signer,
    payload
  );

  const transcation = createTransaction(
    signer,
    transactionHeaderBytes,
    payloadBytes
  );
  const batchHeaderBytes = createBatchHeader(signer, [transcation]);
  const batch = createBatch(signer, batchHeaderBytes, [transcation]);
  return await submitBatch([batch]);
};

module.exports = { sendPayload };
