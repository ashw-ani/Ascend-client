import React, { useState, useEffect } from "react";
import styles from "./courses.module.css";
import getCourses from "../../api/getCourses";
import CourseTitle from "./CourseTitle/CourseTitle";
import { ReactComponent as Loader } from "../../assets/signInButton.svg";
import Progressindiactor from "../UI/course progress indicator/Progressindicator";

function Course(props) {
  const [courses, setCourses] = useState(null);
  const [loader, setLoader] = useState(false);
  const [totalLectures, setTotalLectures] = useState(0);
  const [completeLectures, setCompleteLectures] = useState(0);
  const [completedProgress, setCompletedProgress] = useState(70);
  const [isPurchased, setIsPurchased] = useState(true);
  const [closeAll, setCloseAll] = useState();

  const closeAllCourses = () => {
    setCloseAll((prev) => !prev);
  };
  useEffect(() => {
    const fetchCourses = async () => {
      setLoader(true);
      const data = await getCourses(props.courseName);
      setLoader(false);
      setCourses(data.courses);
      setIsPurchased(data.isPurchased);

      let total_lectures = 0;
      for (const course of data.courses) {
        total_lectures += course.total_lectures;
      }

      setTotalLectures(total_lectures);

      let completed_lectures = 0;

      for (const course of data.courses) {
        if (course.lecturesWatched) {
          completed_lectures += course.lecturesWatched;
        }
      }

      setCompleteLectures(completed_lectures);

      setCompletedProgress(
        parseInt((completed_lectures / total_lectures) * 100)
      );
    };

    fetchCourses();
  }, [props.courseName]);

  if (loader) {
    return (
      <div className={styles.spinnerDiv}>
        <Loader className={styles.spinner} />
      </div>
    );
  }

  return (
    <>
      {courses && (
        <div className={styles.courses_body}>
          <Progressindiactor
            bgcolor="orange"
            progress={completedProgress}
            height={15}
            lecturetotal={totalLectures}
            lectureCompleted={completeLectures}
            locked={!isPurchased}
          />

          <div className={styles.closeall} onClick={closeAllCourses}>
            Close All
          </div>

          {courses.map((course) => (
            <CourseTitle
              key={course.id}
              courseData={course}
              isPurchased={isPurchased}
              closeAll={closeAll}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Course;
