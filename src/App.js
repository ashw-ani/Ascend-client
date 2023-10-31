import styles from "./App.module.css";
import Sidepanel from "./Components/sidepanel/Sidepanel";
import Body from "./Components/body/Body";
import Leaderboard from "./Components/Leaderboard/Leaderboard";
// import Header from "./Components/body/Header/Header";

function App() {
  return (
    <div className={styles.app}>
      {/* <Header></Header> */}
      {/* <Sidepanel />
      <Body /> */}
      <Sidepanel />
      <Body />
    </div>
  );
}

export default App;
