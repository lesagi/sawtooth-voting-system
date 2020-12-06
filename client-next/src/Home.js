import React, { useState, useEffect } from 'react';
import { Header } from '../src/Header';
import { Menu } from '../src/Menu';
import OpenCampaign from './OpenCampaign';
import axios from 'axios';
import CampaignManager from './components/CampaignManager/CampaignManager';
import { toast, ToastContainer } from 'react-toastify';
function Home() {
  const [campaign, setCampaign] = useState();

  const getCampaignState = async (name) =>
    await axios.get(`http://127.0.0.1:5000/campaigns_state/${name}`);

  const openCampaignClickHandler = async (name) => {
    try {
      const serverRes = await axios.post(
        `http://127.0.0.1:5000/open_campaign?name=${name}`,
      );
      if (serverRes.data.success) {
        const state = await getCampaignState(name);
        setCampaign({ ...state.data.res, ...serverRes.data.res });
        toast.info(`Campaign ${name} has been added succesfully`);
      }
    } catch (err) {
      console.log(err);
      toast.info(`An error has occured: ${err.message}`);
    }
  };

  return (
    <div>
      <Header />
      <Menu />

      <div className="container">
        <h3>Manage Campaign</h3>
        {!campaign && (
          <div className="row">
            <div className="col-12">
              <OpenCampaign
                openCampaignClickHandler={openCampaignClickHandler}
              />
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-12">
            <CampaignManager {...campaign} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
