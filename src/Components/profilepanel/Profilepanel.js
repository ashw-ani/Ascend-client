import styles from "./Profilepanel.module.css";

import { MdAccountCircle } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";

const Profilepanel = (props) => {
  return (
    <div className={styles.profile_panel}>
      <div
        className={`${styles.controller_button} ${styles.profile_panel_item}`}
      >
        <FaAngleRight />
      </div>
      <div className={`${styles.profile_options} ${styles.profile_panel_item}`}>
        <MdAccountCircle />
      </div>
    </div>
  );
};
export default Profilepanel;
