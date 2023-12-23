import { useEffect, useState } from "react";
import styles from "./Events.module.css";
import EventCard from "../UI/EventCard/EventCard";
import getEvents from "../../api/fetchEvents";

const Events = (props) => {
  const dateFormatter = (startTime, endTime) => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const day = String(start.getDate()).padStart(2, "0");
    const month = String(start.getMonth() + 1).padStart(2, "0"); // Note: Month is zero-based, so we add 1
    const year = start.getFullYear();

    // Get hours and minutes
    const starthours = start.getHours();
    const startminutes = start.getMinutes();

    // Determine whether it's AM or PM
    const amPm = starthours >= 12 ? "pm" : "am";

    // Convert to 12-hour format
    const formattedStartHours = starthours % 12 === 0 ? 12 : starthours % 12;
    const formattedStartMinutes =
      startminutes < 10 ? "0" + startminutes : startminutes;

    // Formatted time string
    const formattedStartTime = `${formattedStartHours}:${formattedStartMinutes} ${amPm}`;

    // Get hours and minutes
    const endhours = end.getHours();
    const endminutes = end.getMinutes();

    // Determine whether it's AM or PM
    const AmPm = endhours >= 12 ? "pm" : "am";

    // Convert to 12-hour format
    const formattedEndHours = endhours % 12 === 0 ? 12 : endhours % 12;
    const formattedEndMinutes = endminutes < 10 ? "0" + endminutes : endminutes;

    // Formatted time string
    const formattedEndTime = `${formattedEndHours}:${formattedEndMinutes} ${AmPm}`;

    // Get dd-mm-yyyy
    const formattedDate = `${day}-${month}-${year}`;
    // Get the day of the week as a string
    const dayOfWeekString = daysOfWeek[start.getDay()];
    return {
      day: `${dayOfWeekString} ${formattedDate}`,
      time: `${formattedStartTime} - ${formattedEndTime}`,
    };
  };

  const [events, setEvents] = useState({});
  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      //   console.log(events);
      setEvents(events);
    };
    fetchEvents();
  }, []);

  const Schedule = dateFormatter();

  //   console.log(events);

  return (
    <div className={styles.events}>
      {events && (
        <div className={styles.groupevents}>
          <h1 className={styles.eventheading}>Ongoing Events</h1>

          {events.ongoing?.map((event) => {
            const date = dateFormatter(event.startTime, event.endTime);
            return (
              <EventCard
                name={event.name}
                description={event.description}
                joiningLink={event.link}
                image={event.image}
                buttontext={"Join Now"}
                date={date.day}
                duration={date.time}
                key={event.name}
              ></EventCard>
            );
          })}
        </div>
      )}
      <div className={styles.groupevents}>
        <h1 className={styles.eventheading}>Upcoming Events</h1>

        {events.upcoming?.map((event) => {
          const date = dateFormatter(event.startTime, event.endTime);
          return (
            <EventCard
              name={event.name}
              description={event.description}
              joiningLink={event.link}
              image={event.image}
              buttontext={"Register now"}
              date={date.day}
              duration={date.time}
              key={event.name}
            ></EventCard>
          );
        })}
      </div>
    </div>
  );
};
export default Events;
