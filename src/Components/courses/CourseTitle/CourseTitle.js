import React, { useState } from "react";
import styles from "./CourseTitle.module.css";
import { FaSortDown } from "react-icons/fa";
import Sectiontitle from "../SectionTitle/Sectiontitle";

// import CourseLecture from "../courseLecture/CourseLecture";
// import { useEffect } from "react";

function CourseTitle(props) {
  const [showCourse, setshowCourse] = useState({});

  const toggleCourseHandler = (event) => {
    let key = event.target.getAttribute("name");
    // console.log(key);
    setshowCourse((prevState) => ({ ...prevState, [key]: !showCourse[key] }));
    // console.log(showCourse);
  };

  return (
    <>
      <div className={styles.course_title}>
        {props.courseData.name}
        <FaSortDown className={styles.more} />
      </div>

      {props.courseData.sections.map((section) => (
        <Sectiontitle key={section.id} sectionData={section} />
      ))}
    </>
  );
}

export default CourseTitle;
