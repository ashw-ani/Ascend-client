import React, { useEffect, useState } from "react";
import styles from "./CourseTitle.module.css";
import { FaSortDown, FaLock } from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";

function CourseTitle({ isPurchased, courseData, closeAll }) {
  const [showCourse, setShowCourse] = useState(false);

  const toggleCourseHandler = () => {
    setShowCourse((prev) => !prev);
  };

  useEffect(() => {
    setShowCourse(false);
  }, [closeAll]);

  return (
    <>
      {isPurchased ? (
        <div className={styles.course_title} onClick={toggleCourseHandler}>
          {courseData.name}
          <FaSortDown className={styles.more} />
        </div>
      ) : (
        <div className={styles.course_title}>
          {courseData.name}
          <FaLock className={styles.more} />
        </div>
      )}

      {showCourse && (
        <div className={styles.sections}>
          {courseData.sections.map((section) => (
            <SectionTitle key={section.id} sectionData={section} />
          ))}
        </div>
      )}
    </>
  );
}

export default CourseTitle;
