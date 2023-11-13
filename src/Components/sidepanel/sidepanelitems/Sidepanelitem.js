import styles from "./Sidepanelitem.module.css";

const Sidepanel = (props) => {
  const clickHandler = (event) => {
    props.onclick(event);
    // console.log(props.name);
    // console.log(event.target.getAttribute("name"));
  };
  return (
    <div
      className={styles.sidepanelitem}
      onClick={props.onclick}
      name={props.name}
    >
      {props.children}
    </div>
  );
};
export default Sidepanel;
