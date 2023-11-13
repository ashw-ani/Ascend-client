import styles from './Sidepanel.module.css';
import SidepanelItem from './sidepanelitems/Sidepanelitem';
import Sidepanelsubitem from './sidepanelsubitems/sidepanelsubitem';
import { useState } from 'react';

import logotext from '../../assets/logo4.png';
import mainlogo from '../../assets/logo2.png';
import logo from '../../assets/logo.jpeg';

import { MdDashboard } from 'react-icons/md';
import { AiOutlineTrophy } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs';
import { BsStopwatchFill } from 'react-icons/bs';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FiTarget } from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsTools } from 'react-icons/bs';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

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
    navigation.push('/');
  };
  const onClickSubitem = () => {
    navigation.push('/leaderboard/water-enthusiasts');
  };
  const onClickLogin = () => {
    navigation.push('/login');
  };
  const onClickProfile = () => {
    navigation.push('/profile');
  };

  const toggleSideitemHandler = (event) => {
    const key = event.target.getAttribute('name');
    setsideitemState({ [key]: true });
    console.log(sideitemsState);
  };

  return (
    <div className={`${styles.sidepanel} ${showPanel ? ' ' : styles.inactive}`}>
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
        <img src={logo} alt='logo' className={styles.mainlogo} />
        {/* <img src={mainlogo} alt="logo" className={styles.mainlogo} />
        <img src={logotext} alt="logo" className={styles.logotext} /> */}
      </div>
      <div className={styles.sidepanelcontent}>
        <SidepanelItem
          class={sideitemsState.dashboard ? 'active' : 'inactive'}
          onclick={(event) => {
            onClickDashboard();
            toggleSideitemHandler(event);
          }}
          name={'dashboard'}
        >
          <MdDashboard className={styles.sidepanelicons} />
          Dashboard
        </SidepanelItem>
        <SidepanelItem
          class={sideitemsState.leaderboard ? 'active' : 'inactive'}
          onclick={toggleSideitemHandler}
          name={'leaderboard'}
        >
          <AiOutlineTrophy className={styles.sidepanelicons} />
          Leaderboard
          <AiFillCaretRight className={`${styles.moreLB} ${styles.more}`} />
        </SidepanelItem>
        {sideitemsState.leaderboard && (
          <div className={styles.subitems}>
            <Sidepanelsubitem onClick={onClickSubitem}>
              Water Enthusiasts
            </Sidepanelsubitem>
            <Sidepanelsubitem onClick={onClickLogin}>login</Sidepanelsubitem>
            <Sidepanelsubitem onClick={onClickProfile}>
              Profile
            </Sidepanelsubitem>
            <Sidepanelsubitem>scoreboard</Sidepanelsubitem>
            <Sidepanelsubitem>Dashboard</Sidepanelsubitem>
            <Sidepanelsubitem>contests</Sidepanelsubitem>
          </div>
        )}

        <SidepanelItem
          class={sideitemsState.events ? 'active' : 'inactive'}
          onclick={(event) => {
            toggleSideitemHandler(event);
          }}
          name={'events'}
        >
          <BsCalendar className={styles.sidepanelicons} name={'events'} />
          Events
        </SidepanelItem>
        <SidepanelItem
          class={sideitemsState.mybusiness ? 'active' : 'inactive'}
          onclick={toggleSideitemHandler}
          name={'mybusiness'}
        >
          <BsStopwatchFill className={styles.sidepanelicons} />
          My Business
          <AiFillCaretRight className={`${styles.moreMB} ${styles.more}`} />
        </SidepanelItem>
        {sideitemsState.mybusiness && (
          <div className={styles.subitems}>
            <Sidepanelsubitem>Dashboard</Sidepanelsubitem>
            <Sidepanelsubitem>My Data</Sidepanelsubitem>
          </div>
        )}
        <SidepanelItem
          class={sideitemsState.mytask ? 'active' : 'inactive'}
          onclick={toggleSideitemHandler}
          name={'mytask'}
        >
          <AiOutlineUnorderedList className={styles.sidepanelicons} />
          My Task
          <AiFillCaretRight className={`${styles.moreMT} ${styles.more}`} />
        </SidepanelItem>
        {sideitemsState.mytask && (
          <div className={styles.subitems}>
            <Sidepanelsubitem>Dashboard</Sidepanelsubitem>
            <Sidepanelsubitem>Calendar</Sidepanelsubitem>
            <Sidepanelsubitem>My Tasks</Sidepanelsubitem>
          </div>
        )}
        <SidepanelItem
          class={sideitemsState.myactions ? 'active' : 'inactive'}
          onclick={toggleSideitemHandler}
          name={'myactions'}
        >
          <FiTarget className={styles.sidepanelicons} />
          My Action
          <AiFillCaretRight className={`${styles.moreMA} ${styles.more}`} />
        </SidepanelItem>
        {sideitemsState.myactions && (
          <div className={styles.subitems}>
            <Sidepanelsubitem>My Habits</Sidepanelsubitem>
            <Sidepanelsubitem>My Quizzes</Sidepanelsubitem>
            <Sidepanelsubitem>My Points</Sidepanelsubitem>
          </div>
        )}

        <SidepanelItem
          class={sideitemsState.mystreaks ? 'active' : 'inactive'}
          onclick={toggleSideitemHandler}
          name={'mystreaks'}
        >
          <BsStars className={styles.sidepanelicons} />
          My Streaks
          <AiFillCaretRight className={`${styles.moreMS} ${styles.more}`} />
        </SidepanelItem>

        {sideitemsState.mystreaks && (
          <div className={styles.subitems}>
            <Sidepanelsubitem>Add Streaks</Sidepanelsubitem>
            <Sidepanelsubitem>Calendar</Sidepanelsubitem>
            <Sidepanelsubitem>Finishline</Sidepanelsubitem>
          </div>
        )}

        <SidepanelItem
          class={sideitemsState.mycharity ? 'active' : 'inactive'}
          onclick={(event) => {
            toggleSideitemHandler(event);
          }}
          name={'mycharity'}
        >
          <AiOutlineHeart className={styles.sidepanelicons} />
          My Charity
        </SidepanelItem>
        <SidepanelItem
          class={sideitemsState.resources ? 'active' : 'inactive'}
          onclick={(event) => {
            toggleSideitemHandler(event);
          }}
          name={'resources'}
        >
          <BsTools className={styles.sidepanelicons} />
          Resources
        </SidepanelItem>
        <SidepanelItem
          class={sideitemsState.helpdesk ? 'active' : 'inactive'}
          onclick={(event) => {
            toggleSideitemHandler(event);
          }}
          name={'helpdesk'}
        >
          <AiOutlineQuestionCircle className={styles.sidepanelicons} />
          Help Desk
        </SidepanelItem>
      </div>
    </div>
  );
};
export default Sidepanel;
