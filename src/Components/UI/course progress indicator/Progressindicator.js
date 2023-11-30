import styles from "./Progressindicator.module.css";
import { useMediaQuery } from "react-responsive";

const Progressindiactor = ({
  bgcolor,
  lectureCompleted,
  lecturetotal,
  progress,
}) => {
  const isPhone = useMediaQuery({ maxWidth: "450px" });
  const Childdiv = {
    width: `${progress}%`,
    backgroundColor: bgcolor,
  };

  return !isPhone ? (
    <div className={styles.Progressindiactor}>
      <div className={styles.progressheading}>
        <span>Your Progress</span>
        <span>{`${progress}% [${lectureCompleted} out of ${lecturetotal} lectures completed]`}</span>
      </div>
      <div className={styles.Parentdiv}>
        <div className={styles.Childdiv} style={Childdiv}>
          <span className={styles.progresstext}>{}</span>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.Progressindiactor}>
      <div className={styles.progressheadingPhone}>
        <span>Your Progress</span>
      </div>
      <div className={styles.ParentdivPhone}>
        <div className={styles.Childdiv} style={Childdiv}></div>
        <span className={styles.progresstext}>{}</span>
      </div>
      <span className={styles.progresstextPhone}>
        {`${progress}% [${lectureCompleted} out of ${lecturetotal} lectures completed]`}
      </span>
    </div>
  );
};
export default Progressindiactor;
