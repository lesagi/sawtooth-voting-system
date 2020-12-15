const express = require("express");
const router = express.Router();
const { getCampaignState, getCampaignsMRS } = require("../src/State");
const { sendCampaignPayload } = require("../src/Payload");
const { generateSigner } = require("../src/Signer");

router.get("/", function (req, res) {
  getCampaignsMRS().then((campaigns) => {
    res.json(campaigns);
  });
});

router.get("/:name", function (req, res) {
  const { name } = req.params;
  getCampaignState(name).then((state) => {
    res.json(state);
  });
});

router.post("/:name", function (req, res) {
  const { name } = req.params;
  const { new_state, privkey } = req.query;
  const signer = generateSigner(privkey);
  const payload = `${name || "no_name"},${new_state.toLowerCase()},_,_`;
  sendCampaignPayload(signer, payload).then((response) =>
    res.json({ ...response, name, new_state })
  );
});

module.exports = router;
