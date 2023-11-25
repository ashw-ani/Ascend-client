import React, { useState } from "react";
import styles from "./Sectiontitle.module.css";
import { FaSortDown } from "react-icons/fa";

function Sectiontitle(props) {
  console.log(props);
  const [showSections, setshowSections] = useState({});
  const [Sections, setSections] = useState({});

  const toggleCourseHandler = (event) => {
    let key = event.target.getAttribute("name");
    setshowSections((prevState) => ({
      ...prevState,
      [key]: !showSections[key],
    }));
  };

  return (
    <div className={styles.section_title}>
      {props.sectionData.name}
      <FaSortDown className={styles.more} />
    </div>
  );
}

export default Sectiontitle;
