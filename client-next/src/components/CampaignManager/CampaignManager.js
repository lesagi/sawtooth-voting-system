import React from 'react';
import CampaignManagerStyles from './CampaignManager.module.scss';
import axios from 'axios';

const CampaignManager = (props) => {
  const { name, admins } = props;
  const statusOnClickHandler = async (event) => {
    console.log(event.target.innerText);
    // const status = event.target.innerText.toLowerCase();
    // const proxyRes = await axios.post(
    //   `http://127.0.0.1:5000/campaigns_state/${name}?status=${status}`,
    // );
    // const { data } = proxyRes;
    // const { success, res } = data;
  };
  return (
    <div>
      <h3 className={CampaignManagerStyles.header}>
        <span>{name}</span>
        <ul className={`list-inline ${CampaignManagerStyles.statusList}`}>
          {['setup', 'open', 'suspended', 'closed'].map((item) => (
            <li
              key={item}
              className={`${CampaignManagerStyles.status} list-inline-item`}
              onClick={statusOnClickHandler}
            >
              {item}
            </li>
          ))}
        </ul>
      </h3>
      <h6>Admins:</h6>
      {console.log(props)}
      {/* <ul className="list-inline">
            {admins &&
              admins.map((admin) => (
                <li className="list-inline-item">{admin}</li>
              ))}
          </ul> */}
    </div>
  );
};
export default CampaignManager;
