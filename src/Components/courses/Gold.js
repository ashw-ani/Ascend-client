import React, { useState, useEffect } from "react";
import styles from "./courses.module.css";
import getCourses from "../../api/getCourses";
import CourseTitle from "./CourseTitle/CourseTitle";
import { ReactComponent as Loader } from "../../assets/signInButton.svg";
import Progressindiactor from "../UI/course progress indicator/Progressindicator";
import LockedCourse from "../UI/locked course/LockedCourse";

function Gold(props) {
  const [courses, setCourses] = useState(null);
  const [loader, setLoader] = useState(false);
  const [totalLectures, setTotalLectures] = useState(0);
  const [completeLectures, setCompleteLectures] = useState(0);
  const [completedProgress, setCompletedProgress] = useState(0);
  const [isPurchased, setIsPurchased] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoader(true);
      const data = await getCourses("Gold");
      setLoader(false);
      setCourses(data.courses);
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
  }, []);

  if (loader) {
    return (
      <div className={styles.spinnerDiv}>
        <Loader className={styles.spinner} />
      </div>
    );
  }

  if (!isPurchased) {
    return (
      <>
        <LockedCourse />
        {console.log("unpurchased")}
      </>
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
          />

          {courses.map((course) => (
            <CourseTitle key={course.id} courseData={course} />
          ))}
        </div>
      )}
    </>
  );
}

export default Gold;
