import { useEffect, useState } from "react";
import styles from "./CourseLecture.module.css";

const Courselecture = (props) => {
  const [Lectures, setLectures] = useState({});
  console.log(props.lectureData.name);
  return <p>{props.lectureData.name}</p>;
};
export default Courselecture;
