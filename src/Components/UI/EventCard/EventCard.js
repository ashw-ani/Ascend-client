import styles from "./EventCard.module.css";

const EventCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.logo}>
        <img src={`${props.image}`} />
      </div>
      <div className={styles.heading}>{props.name}</div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.timeDetails}>
        <div>{props.date}</div>
        <div>{props.duration}</div>
      </div>
      <div
        className={styles.button}
        onClick={() => {
          window.open(`${props.joiningLink}`, "_blank");
        }}
      >
        {props.buttontext}
      </div>
    </div>
  );
};
export default EventCard;
