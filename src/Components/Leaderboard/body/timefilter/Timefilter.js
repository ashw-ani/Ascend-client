import { useState } from "react";
import styles from "./Timefilter.module.css";

const DEFAULT_STATE = {
  daily: "inactive",
  weekly: "inactive",
  alltime: "inactive",
};

const Timefilter = (props) => {
  const [filter, setFilter] = useState({ ...DEFAULT_STATE, daily: "active" });

  const activate = (event) => {
    if (filter[event.target.name] === "active") {
      console.log("heyyy");
      return;
    }
    props.fetcher(event.target.name);
    setFilter((prevState) => {
      return { ...DEFAULT_STATE, [event.target.name]: "active" };
    });
  };
  return (
    <div className={styles.slider}>
      <button
        name="daily"
        className={`${styles.sliderbutton} ${styles[filter.daily]} `}
        onClick={activate}
      >
        Today
      </button>
      <button
        name="weekly"
        className={`${styles.sliderbutton} ${styles[filter.weekly]}`}
        onClick={activate}
      >
        Weekly
      </button>
      <button
        name="alltime"
        className={`${styles.sliderbutton} ${styles[filter.alltime]}`}
        onClick={activate}
      >
        All time
      </button>
    </div>
  );
};
export default Timefilter;
