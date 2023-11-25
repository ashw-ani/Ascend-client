import React, { useState } from 'react'
import styles from "./CourseTitle.module.css"
import CourseLecture from "../CourseLecture/CourseLecture"
// import { FaSortDown } from "react-icons/fa";
// import Coursetask from "../courseTasks/Coursetask";
// import { useEffect } from 'react';

function CourseTitle(props) {
    const [showSections,setshowSections] = useState({});
    const [Sections,setSections] = useState({});

    const toggleCourseHandler = (event) => {
        let key = event.target.getAttribute("name");
        // console.log(key);
        setshowSections((prevState) => ({ ...prevState, [key]: !showSections[key] }));
        // console.log(showCourse);
      };
    
    
  return (
    <div className={styles.CourseTitle}>
      {Object.keys(Sections).map(sectionKey => (
        <div onClick={toggleCourseHandler}  className={styles.course_title} key={sectionKey}>
          {Sections[sectionKey]}
          {/* <FaSortDown
            className={`${styles.more} ${
              showCourse.courses[courseKey] ? styles.less : ""
            }`}
          /> */}
          <CourseLecture/>
          
        </div>
      ))}
    </div>
  )
}

export default CourseTitle;
