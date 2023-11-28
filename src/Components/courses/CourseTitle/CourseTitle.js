import React, { useState } from "react";
import styles from "./CourseTitle.module.css";
import { FaSortDown } from "react-icons/fa";
import Sectiontitle from "../SectionTitle/SectionTitle";

// import CourseLecture from "../courseLecture/CourseLecture";
// import { useEffect } from "react";

function CourseTitle(props) {
  const [showCourse, setshowCourse] = useState(false);

  const toggleCourseHandler = (event) => {
    setshowCourse((prev) => !prev);

    // setshowCourse((prevState) => ({ ...prevState, [key]: !showCourse[key] }));
  };

  return (
    <>
      <div className={styles.course_title} onClick={toggleCourseHandler}>
        {props.courseData.name}
        <FaSortDown className={styles.more} />
      </div>

      {showCourse && (
        <div className={styles.sections}>
          {" "}
          {props.courseData.sections.map((section) => (
            <Sectiontitle key={section.id} sectionData={section} />
          ))}
        </div>
      )}
    </>
  );
}

export default CourseTitle;
