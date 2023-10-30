import styles from './App.module.css';
import Sidepanel from './Components/sidepanel/Sidepanel';
import Body from './Components/body/Body';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Leaderboard from './Components/Leaderboard/Leaderboard';
// import Header from "./Components/body/Header/Header";

function App() {
  return (
    <div className={styles.app}>
      {/* <Header></Header> */}
      {/* <Sidepanel />
      <Body /> */}
      <Sidepanel />
      <Switch>
        <Route path='/' exact>
          <Body />
        </Route>
        <Route path='/leaderboard' exact>
          <Leaderboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
