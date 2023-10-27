import styles from "./App.module.css";
import Sidepanel from "./Components/sidepanel/Sidepanel";
import Body from "./Components/body/Body";
// import Header from "./Components/body/Header/Header";

function App() {
  return (
    <div className={styles.app}>
      {/* <Header></Header> */}
      <Sidepanel></Sidepanel>
      <Body></Body>
    </div>
  );
}

export default App;
