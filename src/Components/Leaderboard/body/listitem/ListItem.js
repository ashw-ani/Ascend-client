import styles from "./ListItem.module.css";

// const colors = ["#fe0000", "#ff7900", "#ffb200", "#f442d6", "#ae2ce6"];

const Listitem = (props) => {
  // console.log(props.details);
  return (
    <div className={`${styles.listitem} ${styles[props.color]}`}>
      <div className={styles.image}>
        {props.details.firstname[0] + props.details.lastname[0]}
        {/* <img src={props.details.img} /> */}
      </div>
      <div className={styles.name}>
        {props.details.firstname + " " + props.details.lastname}
      </div>
      <div className={styles.score}>{props.details.score}</div>
    </div>
  );
};
export default Listitem;
