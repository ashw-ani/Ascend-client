import styles from "./ListItem.module.css";

const Listitem = (props) => {
  return (
    <div className={`${styles.listitem} ${styles[props.color]}`}>
      <div className={styles.image}>{props.details.name[0]}</div>
      <div className={styles.name}>{props.details.name}</div>
      <div className={styles.score}>{props.details.score}</div>
    </div>
  );
};
export default Listitem;
