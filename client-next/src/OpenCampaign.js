import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
const axios = require('axios');

const OpenCampaign = ({ openCampaignClickHandler }) => {
  const [campaignName, setCampaignName] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [sendProcessing, setSendProcessing] = useState(false);

  function validateCampaignName(name) {
    // const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(mail);
    return true;
  }

  async function addCampaignReqHandler(event) {
    event.preventDefault();
    setSendProcessing(true);
    await openCampaignClickHandler(campaignName);
    setCampaignName('');
    setSendProcessing(false);
  }

  const buttonText = sendProcessing ? 'processing...' : 'Submit';

  return (
    <div>
      <ToastContainer />
      <form>
        <div className="form-group">
          <label htmlFor="campaignName">Campaign Name</label>
          <input
            type="text"
            className="form-control"
            id="campaignName"
            name="CampaignName"
            aria-describedby="campaign name"
            placeholder="Enter Campaign name"
            value={campaignName}
            onChange={(e) => {
              setNameValid(validateCampaignName(e.target.value));
              return setCampaignName(e.target.value);
            }}
          />
          <small id="emailHelp" className="form-text text-muted">
            This name will show publicly to all users
          </small>
        </div>
        <button
          disabled={!nameValid || sendProcessing}
          className="btn btn-primary"
          onClick={addCampaignReqHandler}
          type="submit"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default OpenCampaign;
