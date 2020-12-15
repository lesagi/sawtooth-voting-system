const express = require("express");
const router = express.Router();
const { sendCampaignPayload } = require("../src/Payload");
const { generateSigner } = require("../src/Signer");

router.post("/:name", (req, res) => {
  const { name } = req.params;
  const { party, privkey } = req.query;
  const signer = generateSigner(privkey);
  const payload = `${name},vote,${party},_`;

  sendCampaignPayload(signer, payload).then((response) =>
    res.json({
      ...response,
      name,
      party,
      pubkey: signer.getPublicKey().asHex(),
    })
  );
});

module.exports = router;
