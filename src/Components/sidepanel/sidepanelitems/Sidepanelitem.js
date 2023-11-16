import styles from "./Sidepanelitem.module.css";

const SidepanelItem = (props) => {
  return (
    <div
      className={`${styles.sidepanelitem} ${styles[props.class]}`}
      onClick={props.onclick}
      name={props.name}
    >
      {props.children}
    </div>
  );
};
export default SidepanelItem;
