const express = require("express");
const router = express.Router();
const { getCampaignState, getCampaignsMRS } = require("../src/State");
const { sendPayload } = require("../src/Payload");

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
  const { signer } = req;
  const { name } = req.params;
  const { new_state } = req.query;
  const payload = `${name || "no_name"},${new_state.toLowerCase()},_,_`;
  sendPayload(signer, payload).then((response) =>
    res.json({ ...response, name, new_state })
  );
});

module.exports = router;
