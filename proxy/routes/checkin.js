const express = require("express");
const router = express.Router();
const { sendCitizenPayload } = require("../src/Payload");
const { generateSigner, generateKeys } = require("../src/Signer");
const fs = require("fs");

router.post("/", function (req, res) {
  const { id, ballot } = req.query;
  const { privateKey } = generateKeys();
  const signer = generateSigner(privateKey.asHex());

  const payload = `${id},${ballot}`;
  sendCitizenPayload(signer, payload).then((response) => {
    const chisgads = require("../listing/chisgads.json");
    const len = chisgads.keys.length;
    //Randomize choose, mimics the actual chose of chisgad
    const chosenKeyInd = Math.floor(Math.random() * (len + 1));
    const keys = { ...chisgads.keys[chosenKeyInd] };
    chisgads.keys = [
      ...chisgads.keys.slice(0, chosenKeyInd),
      ...chisgads.keys.slice(chosenKeyInd + 1),
    ];

    // ITS IMPRTANT to notice that this is a callback that actually takes place
    // on a different file, and the path is not resolved, so the realtive address
    // is relative to Payload.js file
    fs.writeFileSync(`./listing/chisgads.json`, JSON.stringify(chisgads));

    res.json({ ...response, ...keys });
  });
});

module.exports = router;
