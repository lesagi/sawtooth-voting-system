const getAllCampaigns = () => {
  const serverRes = await axios.post(
    `http://localhost:5000/campaigns`,
  );
  const { name, res, success } = serverRes.data;
};
