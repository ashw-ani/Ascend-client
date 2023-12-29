const getSidePanelData = async (_id) => {
  try {
    const url = process.env.REACT_APP_URL;

    const response = await fetch(`${url}/api/user/sidepanel`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id }),
    });
    const profileData = await response.json();
    return profileData;
  } catch (error) {
    console.log(error);
  }
};
export default getSidePanelData;
