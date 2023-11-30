import React, { useState, useEffect } from "react";
import styles from "./courses.module.css";
import getCourses from "../../api/getCourses";
import CourseTitle from "./CourseTitle/CourseTitle";
import { ReactComponent as Loader } from "../../assets/signInButton.svg";
import Progressindiactor from "../UI/course progress indicator/Progressindicator";

function Diamond(props) {
  const [courses, setCourses] = useState(null);
  const [loader, setLoader] = useState(false);
  const [completedProgress] = useState(10);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoader(true);
      const data = await getCourses("Diamond");
      setLoader(false);
      setCourses(data.courses);
    };

    fetchCourses();
  }, []);

  return (
    <>
      {loader ? (
        <div className={styles.spinnerDiv}>
          <Loader className={styles.spinner} />
        </div>
      ) : (
        courses && (
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
        )
      )}
    </>
  );
}

export default Diamond;
