const { _hash } = require("../utils");

const CAMP_FAMILY = "votingSystem";
const CAMP_NAMESPACE = _hash(CAMP_FAMILY).substring(0, 6);
const _makeCampaignAddress = (x) => CAMP_NAMESPACE + _hash(x);

const _deserialize = (data) => {
  let campaignsIterable = data
    .split("|")
    .map((stateStr) => stateStr.split(";"))
    .map((stateSplitted) => {
      const [name, parties, count, state, admins] = stateSplitted;
      return [name, { name, parties, count, state, admins }];
    });

  return new Map(campaignsIterable);
};

const _serialize = (campaigns) => {
  let campaignStrs = [];
  /* 
    the var {nameCampaign} is because this field is of the following format
    [<campaign name>, <campaign deserialized data>]
    Such as:
    [
      'campaign_name',
      {
        name: 'campaign_name',
        parties: "likud,kachol-lavan",
        count: '120,23',
        state: 'OPEN',
        admins: "12as3..ds94jf,s8a7...394mfh"
      }
    ]
    That is a special form to give to a map constructor
    so it builds the following map:
    Map {
      'campaign_name' => {
        name: "campaign_name",
        parties: "likud,kachol-lavan",
        count: '120,23',
        state: 'OPEN',
        admins: "12as3..ds94jf,s8a7...394mfh"
      }
    }
  */
  for (const nameCampaign of campaigns) {
    const [name, campaign] = nameCampaign;
    const { parties, count, state } = campaign;
    campaignStrs.push([name, parties, count, state].join(";"));
  }
  campaignStrs.sort();
  return Buffer.from(campaignStrs.join("|"));
};
const _campaignToString = (campaign) => {
  let { name, parties, count, state } = campaign;
  // PARSE NUMBERS!!!!!!!!!!!!!!!
  count = count.split(",").map((num) => parseInt(num));
  parties = parties.split(",");
  let res = [`Campaign: ${name}`, `Status: ${state}`];
  const sum = count.reduce((acc, curr) => acc + curr, 0);
  const voteStatus = {};
  for (const ind in parties) {
    const party = parties[ind];
    const partyCount = count[ind];
    voteStatus[party] = (partyCount / sum) * 100;
  }

  res = res.concat(
    parties.map(
      (party, ind) =>
        `${party}: ${"|".repeat(Math.round(voteStatus[party]))}${"-".repeat(
          100 - Math.round(voteStatus[party])
        )} ${count[ind]}(${voteStatus[party]}%)`
    )
  );
  return res.join("\n");
};
module.exports = {
  CAMP_NAMESPACE,
  CAMP_FAMILY,
  _serialize,
  _deserialize,
  _makeCampaignAddress,
  _campaignToString,
};
