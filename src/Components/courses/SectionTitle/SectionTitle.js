import React, { useState } from "react";
import styles from "./Sectiontitle.module.css";
import { FaSortDown } from "react-icons/fa";
import Courselecture from "../CourseLecture/CourseLecture";

function Sectiontitle(props) {
  const [showSection, setShowSection] = useState(false);
  // const [Sections, setSections] = useState({});

  const toggleSectionHandler = (event) => {
    setShowSection((prev) => !prev);
    // console.log(props);
    // console.log(showSection);
    // console.log(props);
    // setshowCourse((prevState) => ({ ...prevState, [key]: !showCourse[key] }));
    // console.log(showCourse);
  };

  return (
    <>
      <div onClick={toggleSectionHandler} className={styles.section_title}>
        {props.sectionData.name}
        <FaSortDown className={styles.more} />
      </div>

      {
        <div className={styles.sections}>
          {" "}
          {showSection &&
            props.sectionData.lectures.map((lecture) => (
              <Courselecture key={lecture.id} lectureData={lecture} />
            ))}
        </div>
      }

      {/* {props.sectionData.lectures.map((lecture) => {
        <Courselecture lectureData={lecture} />;
      })} */}
    </>
    //  { showSection && }
  );
}

export default Sectiontitle;
