import React from "react";
import styles from "./courses.module.css";
import { FaSortDown } from "react-icons/fa";
import Coursetask from "./courseTasks/Coursetask";
import { useState } from "react";
import getCourses from "../../api/getCourses";
import { useEffect } from "react";

function Gold(props) {
  const [courses, setCourses] = useState();

  useEffect(() => {
    const fethCourses = async () => {
      const courses = await getCourses();

      setCourses(courses);
    };
    fethCourses();
  }, []);

  const [showCourse, setshowCourse] = useState({
    AOE_Masterclass: false,
    Angels_and_Chakras: false,
    Increase_your_Psychic_Powers: false,
    Profitable_Psychic_Profession: false,
    Guided_Meditations: false,
  });

  const toggleCourseHandler = (event) => {
    let key = event.target.getAttribute("name");
    console.log(key);
    setshowCourse((prevState) => ({ ...prevState, [key]: !showCourse[key] }));
    console.log(showCourse);
  };

  return (
    <ol>
      {courses.map((course) => (
        <li key={course.id}>{course.name}</li>
      ))}

      {/* <div className={styles.courses_body}>
        <div
          className={styles.course_title}
          name="AOE_Masterclass"
          onClick={toggleCourseHandler}
        >
          AOE Masterclass
          <FaSortDown className={styles.more} />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse.AOE_Masterclass ? styles.show_tasks : styles.hide_tasks
          }`}
        >
          <Coursetask />
          <Coursetask />
          <Coursetask />
          <Coursetask />
        </div>
        <div
          className={styles.course_title}
          name="Angels_and_Chakras"
          onClick={toggleCourseHandler}
        >
          Angels and Chakras
          <FaSortDown className={styles.more} />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse.Angels_and_Chakras
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
          name="Increase_your_Psychic_Powers"
          onClick={toggleCourseHandler}
        >
          Increase your Psychic Powers
          <FaSortDown className={styles.more} />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse.Increase_your_Psychic_Powers
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
          name="Profitable_Psychic_Profession"
          onClick={toggleCourseHandler}
        >
          Profitable Psychic Profession
          <FaSortDown className={styles.more} />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse["Profitable_Psychic_Profession"]
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
          name="Guided_Meditations"
          onClick={toggleCourseHandler}
        >
          Guided Meditations
          <FaSortDown className={styles.more} />
        </div>
        <div
          className={`${styles.tasks_wrapper} ${
            showCourse.Guided_Meditations
              ? styles.show_tasks
              : styles.hide_tasks
          }`}
        >
          <Coursetask />
          <Coursetask />
          <Coursetask />
          <Coursetask />
        </div>
      </div> */}
    </ol>
  );
}

export default Gold;
