const express = require("express");
const router = express.Router();
const { getCampaignState, getCampaignsMRS } = require("../src/State");
const { sendPayload } = require("../src/Payload");

router.get("/", function (req, res) {
  getCampaignsMRS().then((campaigns) => {
    res.send({ success: true, res: campaigns });
  });
});

router.get("/:name", function (req, res) {
  const { name } = req.params;
  getCampaignState(name).then((state) => {
    res.send({ success: true, res: state });
  });
});

router.post("/", function (req, res) {
  const { signer } = req;
  const { name, state } = req.query;
  const payload = `${name || "no_name"},${state.toLowerCase()},_,_`;
  sendPayload(signer, payload).then((response) =>
    res.json({ ...response, name, state })
  );
});

module.exports = router;
