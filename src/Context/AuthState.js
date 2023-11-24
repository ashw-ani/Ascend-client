import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import * as jwt_decode from "jwt-decode";

const AuthState = (props) => {
  const token = localStorage.getItem("token");
  const tokenData = jwt_decode.jwtDecode(token);

  const fetchCustomerDetails = async (token) => {
    // const customerId = '123'; // Replace with the actual customer ID
    // const token = token; // Replace with the actual token
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id: tokenData.id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://ascend-server.onrender.com/api/user/profile/details",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        return result;
      })
      .catch((error) => console.log("error", error));
    // const url = "https://ascend-server.onrender.com";
    // const tokenData = jwt_decode.jwtDecode(token);

    // try {
    //   const response = await fetch(`${url}/api/user/profile/details`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ id: JSON.stringify(tokenData.id) }),
    //   });

    //   const user = await response.json();
    //   console.log(JSON.stringify(tokenData.id));

    //   console.log(user);

    //   if (!response.ok) {
    //     throw new Error("Failed to fetch customer details");
    //   }

    //   const data = await response.json();
    //   console.log("Data recieved", data);
    //   // setCustomerDetails(data);
    // } catch (error) {
    //   console.error("Error:", error);
    //   // Handle error appropriately (e.g., show an error message to the user)
    // }
  };

  const [user, setUser] = useState(token ? jwt_decode.jwtDecode(token) : {});

  const [loggedIn, setLoggedIn] = useState(true);
  // let token = localStorage.getItem("token");

  // var userData;
  useEffect(() => {
    const getDetailsFromAPI = async () => {
      const token = localStorage.getItem("token");
      const userData = await fetchCustomerDetails(token);
      setUser(user);
      if (token) {
        setUser(jwt_decode.jwtDecode(token));
        if (jwt_decode.jwtDecode(token)) return setLoggedIn(true);
      }
      return setLoggedIn(false);
    };
    getDetailsFromAPI();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
