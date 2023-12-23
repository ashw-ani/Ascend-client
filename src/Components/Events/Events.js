import { useEffect, useState } from "react";
import styles from "./Events.module.css";
import EventCard from "../UI/EventCard/EventCard";
import getEvents from "../../api/fetchEvents";

const Events = (props) => {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      console.log(events);
      setEvents(events);
    };
    fetchEvents();
  }, []);

  console.log(events);

  return (
    <div className={styles.events}>
      {events && (
        <div className={styles.groupevents}>
          <h1 className={styles.eventheading}>Ongoing Events</h1>

          {events.ongoing.map((event) => (
            <EventCard
              name={event.name}
              description={event.description}
              joiningLink={event.link}
              image={event.image}
              buttontext={"Join Now"}
            ></EventCard>
          ))}
        </div>
      )}
      {/* <div className={styles.groupevents}>
        <h1 className={styles.eventheading}>Upcoming Events</h1>
        <EventCard name={events}></EventCard>
      </div> */}
    </div>
  );
};
export default Events;
