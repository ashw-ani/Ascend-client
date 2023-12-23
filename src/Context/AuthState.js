import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import * as jwt_decode from "jwt-decode";
import FetchCustomerDetails from "../api/fetchCutomerDetails";

const AuthState = (props) => {
  const token = localStorage.getItem("token");

  const [user, setUser] = useState(token ? FetchCustomerDetails(token) : {});

  const [loggedIn, setLoggedIn] = useState(token ? true : false);

  useEffect(() => {
    const getDetailsFromAPI = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const { exp } = jwt_decode.jwtDecode(token);
        const expTime = exp * 1000;
        if (Date.now() <= expTime) {
          return setLoggedIn(true);
        }
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
