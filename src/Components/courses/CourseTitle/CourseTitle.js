import React, { useState } from 'react'
import styles from "./CourseTitle.module.css"
import { FaSortDown } from "react-icons/fa";
import Coursetask from "../courseTasks/Coursetask";

function CourseTitle(props) {
    const [showCourse,setshowCourse] = useState({});
    const [courses,setcourses] = useState({
        course1: 'Introduction to React',
    course2: 'Advanced React Concepts',
    course3: 'React Hooks',
    });

    const toggleCourseHandler = (event) => {
        let key = event.target.getAttribute("name");
        // console.log(key);
        setshowCourse((prevState) => ({ ...prevState, [key]: !showCourse[key] }));
        // console.log(showCourse);
      };
    
    
  return (
    <div className={styles.CourseTitle}>
      {Object.keys(courses).map(courseKey => (
        <div onClick={toggleCourseHandler}  className={styles.course_title} key={courseKey}>
          {courses[courseKey]}
          {/* <FaSortDown
            className={`${styles.more} ${
              showCourse.courses[courseKey] ? styles.less : ""
            }`}
          /> */}
        </div>
      ))}
    </div>
  )
}

export default CourseTitle;
