const express = require("express"),
  methodOverride = require("method-override"),
  bodyParser = require("body-parser"),
  app = express().disable("x-powered-by");

const { generateSigner, generateKeys } = require("./src/Signer");
const { getBatches } = require("./src/State");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

const { privateKey } = generateKeys();
const signer = generateSigner(privateKey);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type"
  );
  next();
});

app.use((req, res, next) => {
  req.signer = signer;
  next();
});
//=================
// ROUTES IMPORTING
//=================
const votingRoutes = require("./routes/voting.js");
app.use("/vote", votingRoutes);
const stateRoutes = require("./routes/state.js");
app.use("/state", stateRoutes);
const adminRoutes = require("./routes/admin.js");
app.use("/admin", adminRoutes);
const signerRoutes = require("./routes/signer.js");
app.use("/signer", signerRoutes);

//Home Route
app.get("/", function (req, res) {
  res.render("index");
});

app.get("/batches", function (req, res) {
  getBatches().then((batches) => {
    res.json(batches);
  });
});

//open_campaigns states for campaign that are open
app.get("/batches/open_campaigns", function (req, res) {
  getBatches().then((batches) => {
    // FILTER to get only the batches when the campaign was created
    const filtered = batches
      .filter((curr) => curr.payload.split(",")[1].toLowerCase() === "create")
      .map(({ id, batch_header_sig, payload }) => {
        return {
          name: payload.split(",")[0],
          id,
          link: `http://localhost:8008/batch_statuses?id=${batch_header_sig}`,
        };
      });
    res.json(filtered);
  });
});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log("Server is running");
});
