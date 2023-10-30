import styles from './sidepanelsubitem.module.css';
const Sidepanelsubitem = (props) => {
  return (
    <div className={styles.subitem} onClick={props.onClick}>
      <div className={styles.subitembullet} />
      {props.children}
    </div>
  );
};
export default Sidepanelsubitem;
