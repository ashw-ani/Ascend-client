import styles from "./Sidepanelitem.module.css";

const Sidepanel = (props) => {
  return (
    <div className={styles.sidepanelitem} onClick={props.onClick}>
      {props.children}
    </div>
  );
};
export default Sidepanel;
