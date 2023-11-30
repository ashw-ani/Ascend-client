import styles from "./App.module.css";
import Sidepanel from "./Components/sidepanel/Sidepanel";
import Body from "./Components/body/Body";
import Leaderboard from "./Components/Leaderboard/Leaderboard";
import Login from "./Components/Login/Login";
import Profilepanel from "./Components/profilepanel/Profilepanel";
import { useLocation } from "react-router-dom";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "./Context/AuthContext";
import login from "./api/getLogin";
// import Header from "./Components/body/Header/Header";
import { PanelContextProvider } from "../src/Context/PanelContext";
import * as jwt_decode from "jwt-decode";

function App() {
  const location = useLocation();
  const context = useContext(AuthContext);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      const { exp } = jwt_decode.jwtDecode(token);
      const expTime = exp * 1000;
      if (Date.now() >= expTime) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
  });
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      const { exp } = jwt_decode.jwtDecode(token);
      const expTime = exp * 1000;
      if (Date.now() >= expTime) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
  }, [location]);

  return (
    <div className={`${styles.app}  `}>
      {context.loggedIn ? (
        <>
          <PanelContextProvider>
            <Body />
            <Sidepanel />
            <Profilepanel />
          </PanelContextProvider>
        </>
      ) : (
        <Redirect to="/login" />
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
