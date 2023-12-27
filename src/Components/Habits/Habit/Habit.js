import styles from "./Habit.module.css";
import { useState } from "react";

const Habit = (props) => {
  const [completed, setCompleted] = useState(props.task.isCompleted);
  return (
    <div className={styles.habit} key={props.task._id}>
      <input
        id={props.task._id}
        className={styles.checkbox}
        type="checkbox"
        name={props.task._id}
        onClick={props.toggleHabit}
        checked={completed}
        onChange={(e) => {
          setCompleted(e.target.checked);
        }}
      ></input>
      <label htmlFor={props.task._id}>{props.task.title}</label>
    </div>
  );
};
export default Habit;
