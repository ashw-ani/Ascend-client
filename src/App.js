import styles from "./App.module.css";
import Sidepanel from "./Components/sidepanel/Sidepanel";
import Body from "./Components/body/Body";
import Leaderboard from "./Components/Leaderboard/Leaderboard";
import Login from "./Components/Login/Login";
import Profilepanel from "./Components/profilepanel/Profilepanel";
import {
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "./Context/AuthContext";
import login from "./api/getLogin";
// import Header from "./Components/body/Header/Header";
import { PanelContextProvider } from "../src/Context/PanelContext";

function App() {
  const context = useContext(AuthContext);
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
