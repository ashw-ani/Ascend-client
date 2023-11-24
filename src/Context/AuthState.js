import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import * as jwt_decode from "jwt-decode";
import FetchCustomerDetails from "../api/fetchCutomerDetails";

const AuthState = (props) => {
  const token = localStorage.getItem("token");

  const [user, setUser] = useState(token ? FetchCustomerDetails(token) : {});

  const [loggedIn, setLoggedIn] = useState(true);
  // let token = localStorage.getItem("token");

  // var userData;
  useEffect(() => {
    const getDetailsFromAPI = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        // const userData = await FetchCustomerDetails(token);
        // console.log("data of user", userData);
        // setUser(userData);
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
