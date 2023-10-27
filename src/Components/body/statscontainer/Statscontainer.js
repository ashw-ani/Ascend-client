import styles from "./Statscontainer.module.css";
import Statcard from "./statcards/Statcard";
const Statscontainer = (props) => {
  return (
    <div className={styles.statscontainer}>
      <Statcard />
      <Statcard />
      <Statcard />
      <Statcard />
      <Statcard />
      <Statcard />
      <Statcard />
      <Statcard />
    </div>
  );
};
export default Statscontainer;
