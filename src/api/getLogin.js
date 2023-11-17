const login = async (email, password, rememberMe) => {
  try {
    const response = await fetch(
      `https://ascend-server.onrender.com/api/user/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, rememberMe }),
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default login;
