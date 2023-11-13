import styles from "./Sidepanel.module.css";
import Sidepanelitem from "./sidepanelitems/Sidepanelitem";
import Sidepanelsubitem from "./sidepanelsubitems/sidepanelsubitem";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import logotext from "../../assets/logo4.png";
import mainlogo from "../../assets/logo2.png";
import logo from "../../assets/logo.jpeg";

import { MdDashboard } from "react-icons/md";
import { AiOutlineTrophy } from "react-icons/ai";
import { BsCalendar } from "react-icons/bs";
import { BsStopwatchFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FiTarget } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { useHistory } from "react-router-dom";

const Sidepanel = (props) => {
  const [sideitemsState, setsideitemState] = useState({});
  const [leaderboardState, setLeaderboardState] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const navigation = useHistory();
  // const [myBusinessState, setMyBusinessState] = useState(false);
  // const [myTaskState, setMyTaskState] = useState(false);
  // const [myActionsState, setMyActionsState] = useState(false);
  // const [myStreaksState, setMyStreaksState] = useState(false);

  const onClickDashboard = () => {
    navigation.push("/");
  };
  const onClickSubitem = () => {
    navigation.push("/leaderboard/water-enthusiasts");
  };
  const onClickLogin = () => {
    navigation.push("/login");
  };

  const toggleSideitemHandler = (event) => {
    const key = event.target.getAttribute("name");
    setsideitemState({ [key]: true });
    console.log(sideitemsState);
  };

  return (
    <div className={`${styles.sidepanel} ${showPanel ? " " : styles.inactive}`}>
      <div
        className={styles.hamburger_menu}
        onClick={() => {
          setShowPanel((prevState) => !prevState);
        }}
      >
        <div className={styles.ham}></div>
        <div className={styles.ham}></div>
        <div className={styles.ham}></div>
      </div>
      <div className={styles.sidepanelhead}>
        <img src={logo} alt="logo" className={styles.mainlogo} />
        {/* <img src={mainlogo} alt="logo" className={styles.mainlogo} />
        <img src={logotext} alt="logo" className={styles.logotext} /> */}
      </div>
      <div className={styles.sidepanelcontent}>
        <Sidepanelitem onClick={onClickDashboard} name={"dashboard"}>
          <MdDashboard className={styles.sidepanelicons} />
          Dashboard
        </Sidepanelitem>
        <Sidepanelitem onclick={toggleSideitemHandler} name={"leaderboard"}>
          <AiOutlineTrophy className={styles.sidepanelicons} />
          Leaderboard
          <AiFillCaretRight className={styles.moreLB} />
        </Sidepanelitem>
        {sideitemsState.leaderboard && (
          <div className={styles.subitems}>
            <Sidepanelsubitem onClick={onClickSubitem}>
              Water Enthusiasts
            </Sidepanelsubitem>
            <Sidepanelsubitem onClick={onClickLogin}>login</Sidepanelsubitem>
            <Sidepanelsubitem>scoreboard</Sidepanelsubitem>
            <Sidepanelsubitem>champions</Sidepanelsubitem>
            <Sidepanelsubitem>contests</Sidepanelsubitem>
          </div>
        )}

        <Sidepanelitem>
          <BsCalendar className={styles.sidepanelicons} name={"events"} />
          Events
        </Sidepanelitem>
        <Sidepanelitem onclick={toggleSideitemHandler} name={"mybusiness"}>
          <BsStopwatchFill className={styles.sidepanelicons} />
          My Business
          <AiFillCaretRight className={styles.moremb} />
        </Sidepanelitem>
        <Sidepanelitem>
          <AiOutlineUnorderedList
            className={styles.sidepanelicons}
            onclick={toggleSideitemHandler}
            name={"mytask"}
          />
          My Task
          <AiFillCaretRight className={styles.moremt} />
        </Sidepanelitem>
        <Sidepanelitem onclick={toggleSideitemHandler} name="myactions">
          <FiTarget className={styles.sidepanelicons} />
          My Action
          <AiFillCaretRight className={styles.morema} />
        </Sidepanelitem>
        <Sidepanelitem onclick={toggleSideitemHandler} name="mystreaks">
          <BsStars className={styles.sidepanelicons} />
          My Streaks
          <AiFillCaretRight className={styles.morems} />
        </Sidepanelitem>
        <Sidepanelitem>
          <AiOutlineHeart className={styles.sidepanelicons} />
          My Charity
        </Sidepanelitem>
        <Sidepanelitem>
          <BsTools className={styles.sidepanelicons} />
          Resources
        </Sidepanelitem>
        <Sidepanelitem>
          <AiOutlineQuestionCircle className={styles.sidepanelicons} />
          Help Desk
        </Sidepanelitem>
      </div>
    </div>
  );
};
export default Sidepanel;
