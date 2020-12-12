const express = require("express");
const router = express.Router();
const { generateKeys } = require("../src/Signer");

router.get("/", (req, res) => {
  res.send(req.signer);
});

router.get("/keys", (req, res) => {
  const { privateKey, publicKey } = generateKeys();
  res.json({ privateKey: privateKey.asHex(), publicKey: publicKey.asHex() });
});

module.exports = router;
