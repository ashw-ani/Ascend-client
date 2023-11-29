import React, { useState } from "react";
import styles from "./Sectiontitle.module.css";
import { FaSortDown } from "react-icons/fa";
import CourseLecture from "../CourseLecture/CourseLecture";

function Sectiontitle(props) {
  const [showSection, setShowSection] = useState(false);

  const toggleSectionHandler = () => {
    setShowSection((prev) => !prev);
  };

  return (
    <>
      <div onClick={toggleSectionHandler} className={styles.section_title}>
        {props.sectionData.name}
        <FaSortDown className={styles.more} />
      </div>

      {showSection && (
        <div className={styles.sections}>
          {props.sectionData.lectures.map((lecture) => (
            <CourseLecture key={lecture.id} lectureData={lecture} />
          ))}
        </div>
      )}
    </>
  );
}

export default Sectiontitle;
