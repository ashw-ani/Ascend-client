import styles from "./App.module.css";
import Sidepanel from "./Components/sidepanel/Sidepanel";
import Body from "./Components/body/Body";
import Login from "./Components/Login/Login";
import Profilepanel from "./Components/profilepanel/Profilepanel";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import AuthContext from "./Context/AuthContext";
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
          {!context.loggedIn ? <Login /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
