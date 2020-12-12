const express = require("express");
const router = express.Router();
const { sendPayload } = require("../src/Payload");

router.post("/open_campaign", function (req, res) {
  const { signer } = req;
  const { name } = req.query;

  const payload = `${name || "no_name"},create,_,_`;
  sendPayload(signer, payload).then((response) =>
    res.json({ ...response, name })
  );
});

router.post("/add_party", function (req, res) {
  const { signer } = req;
  const { name, party } = req.query;

  const payload = `${name || "no_name"},add_party,${party},_`;
  sendPayload(signer, payload).then((response) =>
    res.json({ ...response, name, party })
  );
});

router.post("/remove_party", function (req, res) {
  const { signer } = req;
  const { name, party } = req.query;

  const payload = `${name || "no_name"},remove_party,${party},_`;
  sendPayload(signer, payload).then((response) =>
    res.json({ ...response, name, party })
  );
});
module.exports = router;
