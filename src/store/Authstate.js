import { useState } from "react";
import AuthContext from "./auth-context";

const Authstate = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default Authstate;
