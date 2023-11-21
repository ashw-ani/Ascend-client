export default async (user) => {
  try {
    const url = "https://ascend-server.onrender.com";
    // const url = process.env.REACT_APP_API_URL;
    const response = await fetch(`${url}/api/user/profile/update`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data.token;
  } catch (error) {
    console.log(error);
  }
};
