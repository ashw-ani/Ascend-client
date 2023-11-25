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
    if (response.ok) return true;
    else return false;
  } catch (error) {
    console.log(error);
  }
};
