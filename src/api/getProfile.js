const getProfile = async (token) => {
  try {
    const url = "https://ascend-server.onrender.com";

    const response = await fetch(`${url}/api/user/profile/details`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token }),
    });
    const profileData = await response.json();
    console.log(profileData);
    return profileData;
  } catch (error) {
    console.log(error);
  }
};
export default getProfile;
