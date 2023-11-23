import styles from "./Sidepanel.module.css";
import SidepanelItem from "./sidepanelitems/Sidepanelitem";
import Sidepanelsubitem from "./sidepanelsubitems/sidepanelsubitem";
import { useState } from "react";
import SidePanelState from "../../Context/SidePanelState";

// import logotext from "../../assets/logo4.png";
// import mainlogo from "../../assets/logo2.png";
import logo from "../../assets/logo.jpeg";

import { MdDashboard, MdLeaderboard } from "react-icons/md";
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
import { useMyContext } from "../../Context/PanelContext";
import { BsCoin } from "react-icons/bs";
import { IoDiamondSharp } from "react-icons/io5";

const Sidepanel = (props) => {
  const [sideItemsWithMenu, setsideItemsWithMenu] = useState({});
  const [sideItemsWithoutMenu, setsideItemsWithoutMenu] = useState({});
  //for side panel context
  const { showPaneltouch, updateShowPaneltouch } = useMyContext();

  // const { isVisible } = useMyContext();
  const { toggleVisibility } = useMyContext();

  const navigation = useHistory();

  const onClickHam = () => {
    updateShowPaneltouch((prevState) => !prevState);
    toggleVisibility();
  };

  const onClickDashboard = () => {
    navigation.push("/");
    console.log("return the props", props);
  };
  const onClickSubitem = (event) => {
    console.log(event.target.getAttribute("name"));
    navigation.push(`/${event.target.getAttribute("name")}`);
  };

  const toggleSideitemHandler = (event) => {
    const key = event.target.getAttribute("name");
    console.log("Hy from togglesideitemHandler ", sideItemsWithMenu[key]);

    setsideItemsWithMenu({ [key]: !sideItemsWithMenu[key] });
    setsideItemsWithoutMenu({});
    // console.log(sideItemsWithoutMenu);
  };

  const withoutMenuItemsHandler = (event) => {
    const key = event.target.getAttribute("name");
    console.log("Hy from clicking", key, sideItemsWithoutMenu);
    setsideItemsWithMenu({});
    setsideItemsWithoutMenu({ [key]: !sideItemsWithoutMenu[key] });
    // console.log(sideItemsWithoutMenu);
  };

  return (
    <div
      className={`${styles.sidepanel} ${
        showPaneltouch ? " " : styles.inactive
      }`}
    >
      <div className={styles.hamburger_menu} onClick={onClickHam}>
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
          class={sideItemsWithMenu.leaderboard ? "active" : "inactive"}
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
              sideItemsWithMenu.leaderboard ? styles.more_active : styles.more
            }`}
          />
        </SidepanelItem>

        {sideItemsWithMenu.leaderboard && (
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
        {/* <SidepanelItem
          class={sideItemsWithoutMenu.mycourses ? "active" : "inactive"}
          onclick={(event) => withoutMenuItemsHandler(event)}
          name={"mycourses"}
        >
          <IoBookOutline className={styles.sidepanelicons} name="mycourses" />
          My Courses
        </SidepanelItem> */}
        <SidepanelItem
          class={sideItemsWithMenu.Courses ? "active" : "inactive"}
          onclick={toggleSideitemHandler}
          name={"Courses"}
        >
          <IoBookOutline className={styles.sidepanelicons} name="mycourses" />
          Courses
          <AiFillCaretRight
            name="Courses"
            className={` ${
              sideItemsWithMenu.Courses ? styles.more_active : styles.more
            }`}
          />
        </SidepanelItem>

        {sideItemsWithMenu.Courses && (
          <div className={styles.subitems}>
            <Sidepanelsubitem onClick={onClickSubitem} name={"courses/silver"}>
              <BsCoin />
              Silver
            </Sidepanelsubitem>
            <Sidepanelsubitem onClick={onClickSubitem} name={"courses/gold"}>
              <BsCoin />
              Gold
            </Sidepanelsubitem>
            <Sidepanelsubitem onClick={onClickSubitem} name={"courses/diamond"}>
              <IoDiamondSharp />
              Diamond
            </Sidepanelsubitem>
          </div>
        )}
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
