import React, { useState } from "react";
import Layout from "./components/Layout/Layout";
import { generateSigner } from "./BlockchainModules/Signer";
import {
  createTransactionHeader,
  createTransaction,
} from "./BlockchainModules/Transaction";
import {
  CAMP_FAMILY,
  _makeCampaignAddress,
} from "./BlockchainModules/Family.js";
import {
  createBatchHeader,
  createBatch,
  submitBatch,
} from "./BlockchainModules/Batch";
// const [signer, setSigner] = useState(generateSigner());
// const submitRequest = (payload) => {
//   const { transactionHeaderBytes, payloadBytes } = createTransactionHeader(
//     CAMP_FAMILY,
//     _makeCampaignAddress,
//     signer,
//     payload,
//   );
//   const transcation = createTransaction(
//     signer,
//     transactionHeaderBytes,
//     payloadBytes,
//   );
//   const batchHeaderBytes = createBatchHeader(signer, [transcation]);
//   const batch = createBatch(signer, batchHeaderBytes, [transcation]);
//   return submitBatch([batch]);
// };

const App = () => {
  const TextField = () => {
    const [getter, setter] = useState("");

    const handleChange = (event) => {
      setter(event.target.value);
    };

    return <textarea value={getter} onChange={handleChange} />;
  };
  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
  };
  return (
    <Layout>
      <h1>My Voting System</h1>
      <form onSubmit={handleSubmit}></form>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3>Campaigns List</h3>
          </div>
          <div className="col-6">
            <h3>Campaigns List</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default App;
