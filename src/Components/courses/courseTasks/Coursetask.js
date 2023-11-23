import styles from "./Coursetask.module.css";

const Coursetask = (props) => {
  return (
    <div className={styles.task_wrapper}>
      <div className={styles.completion}></div>
      <div className={styles.task_name}>name of the task</div>
    </div>
  );
};
export default Coursetask;
