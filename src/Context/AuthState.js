import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import * as jwt_decode from "jwt-decode";

const AuthState = (props) => {
  const token = localStorage.getItem("token");

  const [user, setUser] = useState(token ? jwt_decode.jwtDecode(token) : {});

  const [loggedIn, setLoggedIn] = useState(true);
  // let token = localStorage.getItem("token");
  // var userData;
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(jwt_decode.jwtDecode(token));
      if (jwt_decode.jwtDecode(token)) return setLoggedIn(true);
    }
    return setLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
