import styles from './App.module.css';
import Sidepanel from './Components/sidepanel/Sidepanel';
import Body from './Components/body/Body';
import Leaderboard from './Components/Leaderboard/Leaderboard';
import Login from './Components/Login/Login';
import {
  Route,
  Switch,
  useLocation,
} from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react';
// import Header from "./Components/body/Header/Header";

function App() {
  const [showPanel, setShowPanel] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    if (location.pathname === '/login') {
      setShowPanel(false);
    } else {
      if (!showPanel) {
        setShowPanel(true);
      }
    }
  }, [location]);
  return (
    <div className={`${styles.app}  ${showPanel ? ' ' : styles.loginbg}`}>
      {showPanel && (
        <>
          <Body />
          <Sidepanel />
        </>
      )}
      <Switch>
        <Route path='/login' exact>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
