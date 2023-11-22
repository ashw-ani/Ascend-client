import styles from "./Sidepanel.module.css";
import SidepanelItem from "./sidepanelitems/Sidepanelitem";
import Sidepanelsubitem from "./sidepanelsubitems/sidepanelsubitem";
import { useState } from "react";

// import logotext from "../../assets/logo4.png";
// import mainlogo from "../../assets/logo2.png";
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
import { IoBookOutline } from "react-icons/io5";

const Sidepanel = (props) => {
  const [sideItemsWithMenu, setsideItemsWithMenu] = useState(false);
  const [sideItemsWithoutMenu, setsideItemsWithoutMenu] = useState({});
  // const [leaderboardState, setLeaderboardState] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const navigation = useHistory();
  // const [myBusinessState, setMyBusinessState] = useState(false);
  // const [myTaskState, setMyTaskState] = useState(false);
  // const [myActionsState, setMyActionsState] = useState(false);
  // const [myStreaksState, setMyStreaksState] = useState(false);

  const onClickDashboard = () => {
    navigation.push("/");
  };
  const onClickSubitem = (event) => {
    console.log(event.target.getAttribute("name"));
    navigation.push(`/${event.target.getAttribute("name")}`);
  };

  const toggleSideitemHandler = (event) => {
    const key = event.target.getAttribute("name");
    // console.log("Hy from clicking");
    setsideItemsWithMenu(!sideItemsWithMenu);
    setsideItemsWithoutMenu({});
    // console.log(sideItemsWithoutMenu);
  };

  const withoutMenuItemsHandler = (event) => {
    const key = event.target.getAttribute("name");
    console.log("Hy from clicking", key, sideItemsWithoutMenu);
    setsideItemsWithMenu(false);
    setsideItemsWithoutMenu({ [key]: !sideItemsWithoutMenu[key] });
    // console.log(sideItemsWithoutMenu);
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
        <SidepanelItem
          class={sideItemsWithoutMenu.dashboard ? "active" : "inactive"}
          onclick={(event) => {
            onClickDashboard();
            withoutMenuItemsHandler(event);
          }}
          name={"dashboard"}
        >
          <MdDashboard className={styles.sidepanelicons} />
          Dashboard
        </SidepanelItem>

        <SidepanelItem
          class={sideItemsWithMenu ? "active" : "inactive"}
          onclick={toggleSideitemHandler}
          name={"leaderboard"}
        >
          <AiOutlineTrophy
            className={styles.sidepanelicons}
            name="leaderboard"
          />
          Leaderboard
          <AiFillCaretRight
            name="leaderboard"
            className={` ${
              sideItemsWithMenu ? styles.more_active : styles.more
            }`}
          />
        </SidepanelItem>

        {sideItemsWithMenu && (
          <div className={styles.subitems}>
            <Sidepanelsubitem
              onClick={onClickSubitem}
              name={"leaderboard/teams"}
            >
              Teams
            </Sidepanelsubitem>
            <Sidepanelsubitem
              onClick={onClickSubitem}
              name={"leaderboard/water-enthusiasts"}
            >
              Water Enthusiasts
            </Sidepanelsubitem>
            <Sidepanelsubitem
              onClick={onClickSubitem}
              name={"leaderboard/Scoreboard"}
            >
              Scoreboard
            </Sidepanelsubitem>
            <Sidepanelsubitem
              onClick={onClickSubitem}
              name={"leaderboard/Dashboard"}
            >
              Dashboard
            </Sidepanelsubitem>
            <Sidepanelsubitem
              onClick={onClickSubitem}
              name={"leaderboard/contests"}
            >
              contests
            </Sidepanelsubitem>
          </div>
        )}

        <SidepanelItem
          class={sideItemsWithoutMenu.events ? "active" : "inactive"}
          onclick={(event) => {
            withoutMenuItemsHandler(event);
          }}
          name={"events"}
        >
          <BsCalendar className={styles.sidepanelicons} name={"events"} />
          Events
        </SidepanelItem>
        <SidepanelItem
          class={sideItemsWithoutMenu.mycourses ? "active" : "inactive"}
          onclick={(event) => withoutMenuItemsHandler(event)}
          name={"mycourses"}
        >
          <IoBookOutline className={styles.sidepanelicons} name="mycourses" />
          My Courses
        </SidepanelItem>

        {/* my business */}
        {/* <SidepanelItem
          class={sideItemsWithoutMenu.mybusiness ? "active" : "inactive"}
          onclick={toggleSideitemHandler}
          name={"mybusiness"}
        >
          <BsStopwatchFill className={styles.sidepanelicons} />
          My Business
          <AiFillCaretRight
            className={` ${
              sideItemsWithoutMenu.mybusiness ? styles.more_active : styles.more
            }`}
          />
        </SidepanelItem>
        {sideItemsWithoutMenu.mybusiness && (
          <div className={styles.subitems}>
            <Sidepanelsubitem>Dashboard</Sidepanelsubitem>
            <Sidepanelsubitem>My Data</Sidepanelsubitem>
          </div>
        )} */}

        {/* <SidepanelItem
          class={sideItemsWithoutMenu.mytask ? "active" : "inactive"}
          onclick={toggleSideitemHandler}
          name={"mytask"}
        >
          <AiOutlineUnorderedList className={styles.sidepanelicons} />
          My Task
          <AiFillCaretRight
            className={` ${
              sideItemsWithoutMenu.mytask ? styles.more_active : styles.more
            }`}
          />
        </SidepanelItem>
        {sideItemsWithoutMenu.mytask && (
          <div className={styles.subitems}>
            <Sidepanelsubitem>Dashboard</Sidepanelsubitem>
            <Sidepanelsubitem>Calendar</Sidepanelsubitem>
            <Sidepanelsubitem>My Tasks</Sidepanelsubitem>
          </div>
        )} */}

        {/* <SidepanelItem
          class={sideItemsWithoutMenu.myactions ? "active" : "inactive"}
          onclick={toggleSideitemHandler}
          name={"myactions"}
        >
          <FiTarget className={styles.sidepanelicons} />
          My Action
          <AiFillCaretRight
            className={` ${
              sideItemsWithoutMenu.myactions ? styles.more_active : styles.more
            }`}
          />
        </SidepanelItem> */}

        {/* {sideitemsState.myactions && (
          <div className={styles.subitems}>
            <Sidepanelsubitem>My Habits</Sidepanelsubitem>
            <Sidepanelsubitem>My Quizzes</Sidepanelsubitem>
            <Sidepanelsubitem>My Points</Sidepanelsubitem>
          </div>
        )} */}

        {/* <SidepanelItem
          class={sideitemsState.mystreaks ? "active" : "inactive"}
          onclick={toggleSideitemHandler}
          name={"mystreaks"}
        >
          <BsStars className={styles.sidepanelicons} />
          My Streaks
          <AiFillCaretRight
            className={` ${
              sideitemsState.mystreaks ? styles.more_active : styles.more
            }`}
          />
        </SidepanelItem>

        {sideitemsState.mystreaks && (
          <div className={styles.subitems}>
            <Sidepanelsubitem>Add Streaks</Sidepanelsubitem>
            <Sidepanelsubitem>Calendar</Sidepanelsubitem>
            <Sidepanelsubitem>Finishline</Sidepanelsubitem>
          </div>
        )} */}

        {/* <SidepanelItem
          class={sideitemsState.mycharity ? "active" : "inactive"}
          onclick={(event) => {
            toggleSideitemHandler(event);
          }}
          name={"mycharity"}
        >
          <AiOutlineHeart className={styles.sidepanelicons} />
          My Charity
        </SidepanelItem> */}

        {/* <SidepanelItem
          class={sideitemsState.resources ? "active" : "inactive"}
          onclick={(event) => {
            toggleSideitemHandler(event);
          }}
          name={"resources"}
        >
          <BsTools className={styles.sidepanelicons} />
          Resources
        </SidepanelItem> */}
        {/* <SidepanelItem
          class={sideitemsState.helpdesk ? "active" : "inactive"}
          onclick={(event) => {
            toggleSideitemHandler(event);
          }}
          name={"helpdesk"}
        >
          <AiOutlineQuestionCircle className={styles.sidepanelicons} />
          Help Desk
        </SidepanelItem> */}
      </div>
    </div>
  );
};
export default Sidepanel;
