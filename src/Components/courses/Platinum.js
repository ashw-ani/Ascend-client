import React from "react";
import styles from "./courses.module.css";
import { useState } from "react";
import getCourses from "../../api/getCourses";
import { useEffect } from "react";
import CourseTitle from "./CourseTitle/CourseTitle";
import { ReactComponent as Loader } from "../../assets/signInButton.svg";
import Progressindiactor from "../UI/course progress indicator/Progressindicator";

function Platinum(props) {
  const [courses, setCourses] = useState(null);
  const [loader, setLoader] = useState(false);
  const [completedProgress, setCompletedProgress] = useState(50);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoader(true);
      const { courses } = await getCourses("Platinum");
      setLoader(false);
      setCourses(courses);
    };

    fetchCourses();
  }, []);

  if (loader) {
    return (
      <div className={styles.spinnerDiv}>
        <Loader className={styles.spinner} />
      </div>
    );
  }

  if (!courses) {
    return null;
  }

  return (
    <div className={styles.courses_body}>
      <Progressindiactor
        bgcolor="orange"
        progress={completedProgress}
        height={15}
      />

      {courses.map((course) => (
        <CourseTitle key={course.id} courseData={course} />
      ))}
    </div>
  );
}

export default Platinum;
