import { useEffect, useState } from "react";
import styles from "./CourseLecture.module.css";

const Courselecture = (props) => {
  const [Lectures, setLectures] = useState({});
  console.log(props.lectureData.name);
  return (
    <div className={styles.lecture_wrapper}>
      <div className={styles.completion}></div>
      {props.lectureData.name}
    </div>
  );
};
export default Courselecture;
