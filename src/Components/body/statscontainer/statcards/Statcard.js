import styles from "./Statcard.module.css";
const Statcard = (props) => {
  return (
    <div className={`${styles.statcard} ${styles[`${props.color}`]}`}>
      <div className={styles.cardtext}>
        <div className={styles.cardvalue}>{props.value}</div>
        <div className={styles.cardtitle}>{props.title}</div>
      </div>
      <div className={styles.cardart}>{props.cardart}</div>
    </div>
  );
};
export default Statcard;
