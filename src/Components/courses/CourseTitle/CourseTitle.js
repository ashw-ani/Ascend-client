import React, { useState } from 'react'
import styles from "./CourseTitle.module.css"

function CourseTitle(props) {
    const [courses,setcourses] = useState({
        course1: 'Introduction to React',
    course2: 'Advanced React Concepts',
    course3: 'React Hooks',
    });
  return (
    <div className={styles.CourseTitle}>
      {Object.keys(courses).map(courseKey => (
        <div className={styles.course_title} key={courseKey}>
          {courses[courseKey]}
        </div>
      ))}
    </div>
  )
}

export default CourseTitle;
