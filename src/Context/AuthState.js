import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import * as jwt_decode from 'jwt-decode';

const AuthState = (props) => {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userData = jwt_decode.jwtDecode(token);
      setUser(user);
      if (userData) return setLoggedIn(true);
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
