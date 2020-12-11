const express = require("express");
const router = express.Router();
const { sendPayload } = require("../src/Payload");

router.post("/", (req, res) => {
  const { signer } = req;
  const { name, party } = req.query;

  const payload = `${name},vote,${party},_`;
  sendPayload(signer, payload).then((response) =>
    res.json({ ...response, name, party })
  );
});

module.exports = router;
