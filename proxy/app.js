const express = require("express"),
  methodOverride = require("method-override"),
  bodyParser = require("body-parser"),
  app = express().disable("x-powered-by");

const { generateSigner } = require("./src/Signer");
const {
  createTransactionHeader,
  createTransaction,
} = require("./src/Transaction");
const { CAMP_FAMILY, _makeCampaignAddress } = require("./src/Family.js");
const { createBatchHeader, createBatch, submitBatch } = require("./src/Batch");
const {
  getCampaignState,
  getCampaignsMRS,
  getBatches,
} = require("./src/State");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

//=================
// ROUTES IMPORTING
//=================

// const phrasesCounterRoutes = require("./routes/phrasesCounter.js");
// app.use("/phrasesCounter", phrasesCounterRoutes);

// =====================
// Setting the routes
// =====================
const signer = generateSigner(
  "efbd20f74a1dc0671b78697858b9c140700bab54f71bc90dfccf3208b61af541"
);

//Home Route
app.get("/", function (req, res) {
  res.render("index");
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type"
  );
  next();
});

const sendPayload = async (payload) => {
  const { transactionHeaderBytes, payloadBytes } = createTransactionHeader(
    CAMP_FAMILY,
    _makeCampaignAddress,
    signer,
    payload
  );
  const transcation = createTransaction(
    signer,
    transactionHeaderBytes,
    payloadBytes
  );
  const batchHeaderBytes = createBatchHeader(signer, [transcation]);
  const batch = createBatch(signer, batchHeaderBytes, [transcation]);
  return await submitBatch([batch]);
};
app.post("/open_campaign", function (req, res) {
  const { name, hexKey } = req.query;

  const payload = `${name || "no_name"},create,_,_`;
  sendPayload(payload).then((response) =>
    res.send({ success: true, res: { ...response, name } })
  );
});

app.get("/campaigns_state", function (req, res) {
  getCampaignsMRS().then((campaigns) => {
    res.send({ success: true, res: campaigns });
  });
});

app.get("/campaigns_state/:name", function (req, res) {
  const { name } = req.params;
  getCampaignState(name).then((state) => {
    res.send({ success: true, res: state });
  });
});
app.post("/campaigns_state/:name", function (req, res) {
  const { name } = req.params;
  const { status } = req.query;
  getCampaignState(name).then((state) => {
    res.send({ success: true, res: state });
  });
});

app.get("/batches", function (req, res) {
  getBatches().then((batches) => {
    res.send({ success: true, res: batches });
  });
});

//open_campaigns states for campaign that are open
app.get("/batches/open_campaigns", function (req, res) {
  getBatches().then((batches) => {
    // FILTER to get only the batches when the campaign was created
    res.send({
      success: true,
      res: batches
        .filter((curr) => curr.payload.split(",")[1].toLowerCase() === "create")
        .map(({ id, batch_header_sig, payload }) => {
          return {
            name: payload.split(",")[0],
            id,
            link: `http://localhost:8008/batch_statuses?id=${batch_header_sig}`,
          };
        }),
    });
  });
});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log("Server is running");
});
