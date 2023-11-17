import styles from "./App.module.css";
import Sidepanel from "./Components/sidepanel/Sidepanel";
import Body from "./Components/body/Body";
import Leaderboard from "./Components/Leaderboard/Leaderboard";
import Login from "./Components/Login/Login";
import Profilepanel from "./Components/profilepanel/Profilepanel";
import {
  Route,
  Switch,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

import * as jwt_decode from "jwt-decode";
// import Header from "./Components/body/Header/Header";

function App() {
  const context = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt_decode.jwtDecode(token);
      if (user) return context.setIsLoggedIn(true);
    }
    return context.setIsLoggedIn(false);
  }, []);

  return (
    <div className={`${styles.app}  `}>
      {context.isLoggedIn && (
        <>
          <Body />
          <Sidepanel />
          <Profilepanel />
        </>
      )}
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
