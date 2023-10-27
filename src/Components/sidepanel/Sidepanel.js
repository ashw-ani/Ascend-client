import styles from "./Sidepanel.module.css";
import Sidepanelitem from "./sidepanelitems/Sidepanelitem";
import Sidepanelsubitem from "./sidepanelsubitems/sidepanelsubitem";
import { useState } from "react";

import logotext from "../../assets/logo4.png";
import mainlogo from "../../assets/logo2.png";

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

const Sidepanel = (props) => {
  const [leaderboardState, setLeaderboardState] = useState(false);
  const [myBusinessState, setMyBusinessState] = useState(false);
  const [myTaskState, setMyTaskState] = useState(false);
  const [myActionsState, setMyActionsState] = useState(false);
  const [myStreaksState, setMyStreaksState] = useState(false);

  const toggleLeaderboardHandler = () => {
    setLeaderboardState(!leaderboardState);
  };

  return (
    <div className={styles.sidepanel}>
      <div className={styles.sidepanelhead}>
        <img src={mainlogo} alt="logo" className={styles.mainlogo} />
        <img src={logotext} alt="logo" className={styles.logotext} />
      </div>
      <div className={styles.sidepanelcontent}>
        <Sidepanelitem>
          <MdDashboard className={styles.sidepanelicons} />
          Dashboard
        </Sidepanelitem>
        <Sidepanelitem onClick={toggleLeaderboardHandler}>
          <AiOutlineTrophy className={styles.sidepanelicons} />
          Leaderboard
          <AiFillCaretRight className={styles.more} />
        </Sidepanelitem>
        {leaderboardState && (
          <div className={styles.subitems}>
            <Sidepanelsubitem>scoreboard</Sidepanelsubitem>
            <Sidepanelsubitem>champions</Sidepanelsubitem>
            <Sidepanelsubitem>contests</Sidepanelsubitem>
          </div>
        )}

        <Sidepanelitem>
          <BsCalendar className={styles.sidepanelicons} />
          Events
        </Sidepanelitem>
        <Sidepanelitem>
          <BsStopwatchFill className={styles.sidepanelicons} />
          My Business
          <AiFillCaretRight className={styles.more} />
        </Sidepanelitem>
        <Sidepanelitem>
          <AiOutlineUnorderedList className={styles.sidepanelicons} />
          My Task
          <AiFillCaretRight className={styles.more} />
        </Sidepanelitem>
        <Sidepanelitem>
          <FiTarget className={styles.sidepanelicons} />
          My Action
          <AiFillCaretRight className={styles.more} />
        </Sidepanelitem>
        <Sidepanelitem>
          <BsStars className={styles.sidepanelicons} />
          My Streaks
          <AiFillCaretRight className={styles.more} />
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
