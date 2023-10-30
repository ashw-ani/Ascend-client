import styles from "./Loader.module.css";
import gif from "../../../assets/loadr.gif";

const Loader = (props) => {
  return (
    <>
      <div className={styles.loader}>
        <img src={gif} className={styles.loadergif}></img>
        Loading...
        <div className={styles.glass}>
          <div className={styles.water}></div>
        </div>
      </div>
    </>
  );
};
export default Loader;
