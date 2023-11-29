import React, { useState } from "react";
import styles from "./CourseLecture.module.css";

const CourseLecture = (props) => {
  const [lectures, setLectures] = useState({});

  return (
    <div className={styles.lecture_wrapper}>
      <div
        className={`${styles.completion} ${
          props.lectureData.isCompleted ? styles.complete : styles.incomplete
        }`}
      ></div>
      {props.lectureData.name}
    </div>
  );
};

export default CourseLecture;
