import React from "react";
import styles from "./courses.module.css";
import { FaSortDown } from "react-icons/fa";
// import Coursetask from "./courseTasks/Coursetask";
import { useState } from "react";

function Diamond(props) {
  const [showCourse, setshowCourse] = useState({
    Tarot_Card_Reading_Course: false,
    Alter_your_money_Reality: false,
    Tame_the_Lion: false,
    "Body_&_You": false,
    Digital_Coaching: false,
    Law_of_Attraction: false,
    Spiritual_Awakening: false,
    Purpose_passion_Phenomenance: false,
    Video_Ninja_Mastery: false,
    Charismatic_Coach: false,
    Personal_Development_and_Branding: false,
  });

  const toggleCourseHandler = (event) => {
    let key = event.target.getAttribute("name");
    console.log(key);
    setshowCourse((prevState) => ({ ...prevState, [key]: !showCourse[key] }));
    console.log(showCourse);
  };

  return (
    <>
      <div className={styles.courses_body}>
        <div
          className={styles.course_title}
          name="Tarot_Card_Reading_Course"
          onClick={toggleCourseHandler}
        >
          Tarot Card Reading Course
          <FaSortDown className={styles.more} />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse.Tarot_Card_Reading_Course
              ? styles.show_tasks
              : styles.hide_tasks
          }`}
        >
          {/* <Coursetask />
          <Coursetask />
          <Coursetask />
          <Coursetask /> */}
        </div>
        <div
          className={styles.course_title}
          name="Alter_your_money_Reality"
          onClick={toggleCourseHandler}
        >
          Alter your money Reality
          <FaSortDown className={styles.more} />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse["Alter_your_money_Reality"]
              ? styles.show_tasks
              : styles.hide_tasks
          }`}
        ></div>
        <div
          className={styles.course_title}
          name="Tame_the_Lion"
          onClick={toggleCourseHandler}
        >
          Tame the Lion
          <FaSortDown className={styles.more} />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse.Tame_the_Lion ? styles.show_tasks : styles.hide_tasks
          }`}
        >
          {/* <Coursetask />
          <Coursetask />
          <Coursetask />
          <Coursetask /> */}
        </div>
        <div
          className={styles.course_title}
          name="Body_&_You"
          onClick={toggleCourseHandler}
        >
          Body & You
          <FaSortDown className={styles.more} />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse["Body_&_You"] ? styles.show_tasks : styles.hide_tasks
          }`}
        >
          {/* <Coursetask />
          <Coursetask />
          <Coursetask />
          <Coursetask /> */}
        </div>
        <div
          className={styles.course_title}
          name="Digital_Coaching"
          onClick={toggleCourseHandler}
        >
          Digital Coaching
          <FaSortDown className={styles.more} />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse.Digital_Coaching ? styles.show_tasks : styles.hide_tasks
          }`}
        >
          {/* <Coursetask />
          <Coursetask />
          <Coursetask />
          <Coursetask /> */}
        </div>
        <div
          className={styles.course_title}
          name="Law_of_Attraction"
          onClick={toggleCourseHandler}
        >
          Law of Attraction
          <FaSortDown className={styles.more} />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse.Law_of_Attraction ? styles.show_tasks : styles.hide_tasks
          }`}
        >
          {/* <Coursetask />
          <Coursetask />
          <Coursetask />
          <Coursetask /> */}
        </div>
        <div
          className={styles.course_title}
          name="Spiritual_Awakening"
          onClick={toggleCourseHandler}
        >
          Spiritual Awakening
          <FaSortDown className={styles.more} />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse.Spiritual_Awakening
              ? styles.show_tasks
              : styles.hide_tasks
          }`}
        >
          {/* <Coursetask />
          <Coursetask />
          <Coursetask />
          <Coursetask /> */}
        </div>
        <div
          className={styles.course_title}
          name="Purpose_passion_Phenomenance"
          onClick={toggleCourseHandler}
        >
          Purpose passion Phenomenance
          <FaSortDown className={styles.more} />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse.Purpose_passion_Phenomenance
              ? styles.show_tasks
              : styles.hide_tasks
          }`}
        >
          {/* <Coursetask />
          <Coursetask />
          <Coursetask />
          <Coursetask /> */}
        </div>
        <div
          className={styles.course_title}
          name="Video_Ninja_Mastery"
          onClick={toggleCourseHandler}
        >
          Video Ninja Mastery
          <FaSortDown className={styles.more} />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse.Video_Ninja_Mastery
              ? styles.show_tasks
              : styles.hide_tasks
          }`}
        >
          {/* <Coursetask />
          <Coursetask />
          <Coursetask />
          <Coursetask /> */}
        </div>
        <div
          className={styles.course_title}
          name="Charismatic_Coach"
          onClick={toggleCourseHandler}
        >
          Charismatic Coach
          <FaSortDown className={styles.more} />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse.Charismatic_Coach ? styles.show_tasks : styles.hide_tasks
          }`}
        >
          {/* <Coursetask />
          <Coursetask />
          <Coursetask />
          <Coursetask /> */}
        </div>
        <div
          className={styles.course_title}
          name="Personal_Development_and_Branding"
          onClick={toggleCourseHandler}
        >
          Personal Development and Branding
          <FaSortDown className={styles.more} />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse.Personal_Development_and_Branding
              ? styles.show_tasks
              : styles.hide_tasks
          }`}
        >
          {/* <Coursetask />
          <Coursetask />
          <Coursetask />
          <Coursetask /> */}
        </div>
      </div>
    </>
  );
}

export default Diamond;
