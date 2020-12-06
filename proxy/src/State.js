const axios = require("axios");
const Ramda = require("ramda");

const getAllCampaigns = async () => {
  const res = await axios.get(`${process.env.BLOCKCHAIN_ADDR}/state`);
  return res.data.data
    .map((appState) => {
      const base64Decoded = Buffer.from(appState.data, "base64").toString();
      const [name, parties, count, state, admins] = base64Decoded.split(";");
      return { name, parties, count, state, admins };
    })
    .filter((campaign) => campaign.state);
};

// MRS = Most Recent State
const getCampaignsMRS = async () => {
  const allCampaigns = await getAllCampaigns();
  const campLen = allCampaigns.length;
  return allCampaigns.filter((campaign, ind) => {
    for (let i = 0; i < campLen; i++) {
      const camp = allCampaigns[i];
      if (camp.name === campaign.name) {
        return i === ind;
      }
    }
    return true;
  });
};

const getCampaignState = async (name) => {
  const campaignsRecentState = await getCampaignsMRS();
  const len = campaignsRecentState.length;
  for (let i = 0; i < len; i++) {
    if (campaignsRecentState[i].name === name) {
      return campaignsRecentState[i];
    }
  }
  return null;
};

const getBatches = async () => {
  const res = await axios.get(`${process.env.BLOCKCHAIN_ADDR}/batches`);

  const zipped = res.data.data.map((batch) => {
    // ZIP of format: [{id, decrypted_payload}]
    // REDUCED to aggregated array of all results from zipped
    // FILTER to get only batches from the transactions family
    return Ramda.zipWith(
      (id, transaction, batch_header_sig) => {
        const { payload } = transaction;
        return {
          id,
          batch_header_sig: batch.header_signature,
          payload: Buffer.from(payload, "base64").toString(),
        };
      },
      batch.header.transaction_ids,
      batch.transactions
    );
  });
  return zipped
    .reduce((acc, curr) => [...acc, ...curr], [])
    .filter((curr) => curr.payload.split(",").length === 4);
};

module.exports = {
  getAllCampaigns,
  getCampaignsMRS,
  getCampaignState,
  getBatches,
};
