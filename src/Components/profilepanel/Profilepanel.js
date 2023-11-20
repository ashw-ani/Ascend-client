import styles from "./Profilepanel.module.css";

import { MdAccountCircle } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Profilepanel = (props) => {
  const navigation = useHistory();

  const profileHandler = () => {
    navigation.push("/profile");
  };

  const togglePPHandler = () => {
    setpPState((prevState) => !prevState);
  };

  const [pPState, setpPState] = useState(false);
  return (
    <div className={`${pPState ? styles.profile_panel : styles.closed}`}>
      <div
        onClick={togglePPHandler}
        className={`${styles.controller_button} ${styles.profile_panel_item} ${
          pPState ? styles.close : styles.open
        }`}
      >
        <FaAngleRight />
      </div>
      <div
        className={`${styles.profile_options} ${styles.profile_panel_item}`}
        onClick={() => {
          profileHandler();
          togglePPHandler();
        }}
      >
        <MdAccountCircle />
      </div>
    </div>
  );
};
export default Profilepanel;
