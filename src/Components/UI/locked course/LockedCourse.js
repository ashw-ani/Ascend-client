import styles from "./LockedCourse.module.css";
import { FaLock } from "react-icons/fa";

const LockedCourse = (props) => {
  return (
    <div className={styles.LockedCourse}>
      <FaLock className={styles.lock} />
      <p>The Courses are not Purchased</p>
    </div>
  );
};
export default LockedCourse;
