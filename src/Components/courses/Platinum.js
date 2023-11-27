import React from "react";
import styles from "./courses.module.css";
import { useState } from "react";
import getCourses from "../../api/getCourses";
import { useEffect } from "react";
import CourseTitle from "./CourseTitle/CourseTitle";

function Platinum(props) {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fethCourses = async () => {
      const courses = await getCourses("Platinum");

      setCourses(courses);
    };
    fethCourses();
  }, []);

  return (
    <>
      {courses && (
        <div className={styles.courses_body}>
          {courses.map((course) => (
            <CourseTitle key={course.id} courseData={course} />
          ))}
        </div>
      )}
    </>
  );
}

export default Platinum;
