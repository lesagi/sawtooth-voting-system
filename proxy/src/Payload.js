const {
  createTransactionHeader,
  createTransaction,
} = require("../src/Transaction");
const { createBatchHeader, createBatch, submitBatch } = require("./Batch");

const { CAMP_FAMILY, _makeCampaignAddress } = require("./Family");
const { CIT_FAMILY, _makeCitizenAddress } = require("./CitFamily");

const sendPayload = (family, addressGenerator) => async (signer, payload) => {
  const { transactionHeaderBytes, payloadBytes } = createTransactionHeader(
    family,
    addressGenerator,
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

const sendCampaignPayload = sendPayload(CAMP_FAMILY, _makeCampaignAddress);
const sendCitizenPayload = sendPayload(CIT_FAMILY, _makeCitizenAddress);

module.exports = { sendCampaignPayload, sendCitizenPayload };
