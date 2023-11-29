import styles from "./Progressindicator.module.css";
import { useMediaQuery } from "react-responsive";

const Progressindiactor = (props) => {
  const progessPercentage = 33.3;
  const completedCourses = 15;
  const totalCourses = 45;

  const isPhone = useMediaQuery({ maxWidth: "450px" });

  return !isPhone ? (
    <div className={styles.progress_Indicator}>
      <div className={styles.progress_data}>
        <p className={styles.progress_heading}>Your Progress</p>
        <p
          className={styles.progress_details}
        >{`(${progessPercentage}%) ${completedCourses} of ${totalCourses} Topics Completed`}</p>
      </div>

      <div className={styles.outer}>
        <div className={styles.fill}></div>
      </div>
    </div>
  ) : (
    <div className={styles.progress_Indicator}>
      <div className={styles.progress_data}>
        <p className={styles.progress_heading}>Your Progress</p>
      </div>

      <div className={styles.outer}>
        <div className={styles.fill}></div>
        <p
          className={styles.progress_details}
        >{`(${progessPercentage}%) ${completedCourses} of ${totalCourses} Topics Completed`}</p>
      </div>
    </div>
  );
};
export default Progressindiactor;
