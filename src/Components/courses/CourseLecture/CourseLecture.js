import { useState } from "react";
import styles from "./CourseLecture.module.css";

const Coursetask = (props) => {
  const [Lectures,setLectures] = useState({});
    return (
    <div className={styles.task_wrapper}>
      <div className={styles.completion}></div>
      <div className={styles.task_name}> 
      {Object.keys(Lectures).map(LecturesKey => (
        <div className={styles.Lecture_title} key={LecturesKey}>
          {Lectures[LecturesKey]}          
        </div>
      ))}
      </div>
    </div>
  );
};
export default Coursetask;
