import { useState } from "react";
import styles from "./Events.module.css";

const Events = (props) => {
  const events = {
    past: ["water", "sand", "air", "fire"],
    current: ["water polo", "surfing", "beach volleyball"],
    future: ["sprint", "marathon", "relay race"],
  };

  const [pastEvents, setPastEvents] = useState(events.past);
  const [currentEvents, setCurrentEvents] = useState(events.current);
  const [futureEvents, setFutureEvents] = useState(events.future);

  console.log(pastEvents);

  return (
    <div className={styles.events}>
      <div className={styles.groupevents}>
        <h1 className={styles.eventheading}>Current Events</h1>
        {currentEvents.map((event) => (
          <div className={styles.event}>{event}</div>
        ))}
      </div>
      <div className={styles.groupevents}>
        <h1 className={styles.eventheading}>Future Events</h1>
        {futureEvents.map((event) => (
          <div className={styles.event}>{event}</div>
        ))}
      </div>
      <div className={styles.groupevents}>
        <h1 className={styles.eventheading}>Past Events</h1>
        {pastEvents.map((event) => (
          <div className={styles.event}>{event}</div>
        ))}
      </div>
    </div>
  );
};
export default Events;
