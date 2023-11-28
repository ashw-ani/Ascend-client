import React from "react";
import styles from "./courses.module.css";
import { useState } from "react";
import getCourses from "../../api/getCourses";
import { useEffect } from "react";
import CourseTitle from "./CourseTitle/CourseTitle";
import { ReactComponent as Loader } from "../../assets/signInButton.svg";


function Gold(props) {
  const [courses, setCourses] = useState(null);
  const [loader, setloader] = useState(false);


  useEffect(() => {
    const fethCourses = async () => {
      setloader(true);
      const courses = await getCourses("Gold");
      setloader(false);
      setCourses(courses);
    };
    fethCourses();
  }, []);

  return (
    <>
      {loader?<div className={styles.spinnerDiv}><Loader className={styles.spinner}/></div>:courses && (
        <div className={styles.courses_body}>
          {courses.map((course) => (
            <CourseTitle key={course.id} courseData={course} />
          ))}
        </div>
      )}
    </>
  );
}

export default Gold;
