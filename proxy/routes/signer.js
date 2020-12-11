const express = require("express");
const router = express.Router();
const { getCampaignsMRS } = require("../src/State");
const { generateKeys } = require("../src/Signer");

router.get("/privateKey", function (req, res) {
  getCampaignsMRS().then((campaigns) => {
    res.json(campaigns);
  });
});

router.get("/keys", (req, res) => {
  const { privateKey, publicKey } = generateKeys();
  res.json({ privateKey: privateKey.asHex(), publicKey: publicKey.asHex() });
});

module.exports = router;
