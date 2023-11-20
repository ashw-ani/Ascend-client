const login = async (email, password, rememberMe) => {
  try {
    const url = 'https://ascend-server.onrender.com';
    // const url = process.env.REACT_APP_API_URL;
    console.log(url);
    const response = await fetch(`${url}/api/user/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, rememberMe }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default login;
