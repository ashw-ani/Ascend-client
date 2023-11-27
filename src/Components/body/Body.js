import styles from "./Body.module.css";
import Header from "./Header/Header";
import Chartcontainer from "./chartcontainer/Chartcontainer";
import Dashboardintro from "./dashboardintro/Dashboardintro";
import Statscontainer from "./statscontainer/Statscontainer";
import Leaderboard from "../Leaderboard/Leaderboard";
// import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import { useMyContext } from "../../Context/PanelContext";
import Silver from "../courses/Silver";
import Gold from "../courses/Gold";
import Diamond from "../courses/Diamond";
import Progressindiactor from "../UI/course progress indicator/Progressindicator";

const Body = (props) => {
  const { showPaneltouch, updateShowPaneltouch } = useMyContext();

  const { isVisible, toggleVisibility } = useMyContext();

  const hideSidePanelHandler = () => {
    // Call toggleVisibility to toggle the visibility state
    updateShowPaneltouch(false);
    toggleVisibility();
    console.log("isVisible ", isVisible);
  };

  return (
    <div className={styles.body}>
      {showPaneltouch && (
        <div
          onClick={hideSidePanelHandler}
          className={styles.containerWithSidePanel}
        ></div>
      )}
      <Switch>
        <Route path="/" exact>
          <Header>Dashboard</Header>
          <Dashboardintro />
          <Statscontainer />
          <Chartcontainer />
        </Route>

        <Route path="/leaderboard/water-enthusiasts" exact>
          <Header>Water Enthusiasts</Header>
          <Leaderboard />
        </Route>

        <Route path="/profile">
          <Header>Profile</Header>
          <Profile />
        </Route>

        <Route path="/courses/silver" exact>
          <Header>
            Silver Courses <Progressindiactor />
          </Header>
          <Silver />
        </Route>

        <Route path="/courses/gold" exact>
          <Header>
            Gold Courses <Progressindiactor />
          </Header>
          <Gold />
        </Route>

        <Route path="/courses/diamond" exact>
          <Header>Diamond Courses</Header>
          <Diamond />
        </Route>
      </Switch>
    </div>
  );
};
export default Body;
