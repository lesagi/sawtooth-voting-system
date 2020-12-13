const express = require("express");
const router = express.Router();
const { sendPayload } = require("../src/Payload");
const { generateSigner } = require("../src/Signer");

router.post("/:name", (req, res) => {
  const { name } = req.params;
  const { party, privkey } = req.query;
  const signer = generateSigner(privkey);
  const payload = `${name},vote,${party},_`;
  sendPayload(signer, payload).then((response) =>
    res.json({ ...response, name, party })
  );
});

module.exports = router;
