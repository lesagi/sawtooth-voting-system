import React, { useState } from 'react';
import Home from './Home';

const pageToShow = (pageName, props) => {
  if (pageName === 'Home') return <Home {...props} />;
  return <div>Not Found</div>;
};

const App = ({ pageName }) => {
  return <div>{pageToShow(pageName, {})}</div>;
};

export default App;

// import { generateSigner } from './BlockchainModules/Signer';
// import {
//   createTransactionHeader,
//   createTransaction,
// } from './BlockchainModules/Transaction';
// import {
//   CAMP_FAMILY,
//   _makeCampaignAddress,
// } from './BlockchainModules/Family.js';
// import {
//   createBatchHeader,
//   createBatch,
//   submitBatch,
// } from './BlockchainModules/Batch';
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
