import styles from "./Progressindicator.module.css";

const Progressindiactor = (props) => {
  const progessPercentage = 33.3;
  const completedCourses = 15;
  const totalCourses = 45;
  return (
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
  );
};
export default Progressindiactor;
