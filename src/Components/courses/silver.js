import React from "react";
import styles from "./courses.module.css";
import { FaSortDown } from "react-icons/fa";
import Coursetask from "./courseTasks/Coursetask";
import { useState } from "react";

function Silver(props) {
  const [showCourse, setshowCourse] = useState({
    Angel_Affirmations: false,
    "Angel_Feathers_Demystified_V.2.0": false,
    Angel_Frequency_Music: false,
    "Angel_Number_Decoded_V.2.0": false,
    Angels_On_Earth_101: false,
    AOE_Meet_Ups: false,
    Guardian_Angels: false,
    Spirit_Guides: false,
  });

  const toggleCourseHandler = (event) => {
    let key = event.target.getAttribute("name");
    // console.log(key);
    setshowCourse((prevState) => ({ ...prevState, [key]: !showCourse[key] }));
    // console.log(showCourse);
  };

  return (
    <>
      <div className={styles.courses_body}>
        <div
          className={styles.course_title}
          name="Angel_Affirmations"
          onClick={toggleCourseHandler}
        >
          Angel Affirmations
          <FaSortDown
            className={`${styles.more} ${
              showCourse.Angel_Affirmations ? styles.less : ""
            }`}
          />
        </div>
        {showCourse.Angel_Affirmations ? (
          <div
            className={`${styles.tasks_wrapper} ${
              showCourse.Angel_Affirmations
                ? styles.show_tasks
                : styles.hide_tasks
            }`}
          >
            <Coursetask />
            <Coursetask />
            <Coursetask />
            <Coursetask />
          </div>
        ) : null}
        <div
          className={styles.course_title}
          name="Angel_Feathers_Demystified_V.2.0"
          onClick={toggleCourseHandler}
        >
          Angel Feathers Demystified V.2.0
          <FaSortDown
            className={`${styles.more} ${
              showCourse["Angel_Feathers_Demystified_V.2.0"] ? styles.less : ""
            }`}
          />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse["Angel_Feathers_Demystified_V.2.0"]
              ? styles.show_tasks
              : styles.hide_tasks
          }`}
        >
          <Coursetask />
          <Coursetask />
          <Coursetask />
          <Coursetask />
        </div>
        <div
          className={styles.course_title}
          name="Angel_Frequency_Music"
          onClick={toggleCourseHandler}
        >
          Angel Frequency Music
          <FaSortDown
            className={`${styles.more} ${
              showCourse.Angel_Frequency_Music ? styles.less : ""
            }`}
          />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse.Angel_Frequency_Music
              ? styles.show_tasks
              : styles.hide_tasks
          }`}
        >
          <Coursetask />
          <Coursetask />
          <Coursetask />
          <Coursetask />
        </div>
        <div
          className={styles.course_title}
          name="Angel_Number_Decoded_V.2.0"
          onClick={toggleCourseHandler}
        >
          Angel Number Decoded V.2.0
          <FaSortDown
            className={`${styles.more} ${
              showCourse["Angel_Number_Decoded_V.2.0"] ? styles.less : ""
            }`}
          />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse["Angel_Number_Decoded_V.2.0"]
              ? styles.show_tasks
              : styles.hide_tasks
          }`}
        >
          <Coursetask />
          <Coursetask />
          <Coursetask />
          <Coursetask />
        </div>
        <div
          className={styles.course_title}
          name="Angels_On_Earth_101"
          onClick={toggleCourseHandler}
        >
          Angels On Earth 101
          <FaSortDown
            className={`${styles.more} ${
              showCourse.Angels_On_Earth_101 ? styles.less : ""
            }`}
          />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse.Angels_On_Earth_101
              ? styles.show_tasks
              : styles.hide_tasks
          }`}
        >
          <Coursetask />
          <Coursetask />
          <Coursetask />
          <Coursetask />
        </div>
        <div
          className={styles.course_title}
          name="AOE_Meet_Ups"
          onClick={toggleCourseHandler}
        >
          AOE Meet Ups
          <FaSortDown
            className={`${styles.more} ${
              showCourse.AOE_Meet_Ups ? styles.less : ""
            }`}
          />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse.AOE_Meet_Ups ? styles.show_tasks : styles.hide_tasks
          }`}
        >
          <Coursetask />
          <Coursetask />
          <Coursetask />
          <Coursetask />
        </div>
        <div
          className={styles.course_title}
          name="Guardian_Angels"
          onClick={toggleCourseHandler}
        >
          Guardian Angels
          <FaSortDown
            className={`${styles.more} ${
              showCourse.Guardian_Angels ? styles.less : ""
            }`}
          />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse.Guardian_Angels ? styles.show_tasks : styles.hide_tasks
          }`}
        >
          <Coursetask />
          <Coursetask />
          <Coursetask />
          <Coursetask />
        </div>
        <div
          className={styles.course_title}
          name="Spirit_Guides"
          onClick={toggleCourseHandler}
        >
          Spirit Guides
          <FaSortDown
            className={`${styles.more} ${
              showCourse.Spirit_Guides ? styles.less : ""
            }`}
          />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse.Spirit_Guides ? styles.show_tasks : styles.hide_tasks
          }`}
        >
          <Coursetask />
          <Coursetask />
          <Coursetask />
          <Coursetask />
        </div>
      </div>
    </>
  );
}

export default Silver;
