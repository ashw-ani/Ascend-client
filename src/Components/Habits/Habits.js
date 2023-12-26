import styles from "./Habits.module.css";
import getHabits from "../../api/getHabits";
import { useState, useEffect, useContext } from "react";
import trackHabit from "../../api/trackHabit";
import * as jwt_decode from "jwt-decode";

const Habits = (props) => {
  const [habits, setHabits] = useState(null);
  const [completed, setCompleted] = useState({});

  const user_id = jwt_decode.jwtDecode(localStorage.getItem("token")).id;

  useEffect(() => {
    const fetchHabits = async () => {
      const habits = await getHabits();

      setHabits(habits);
    };
    fetchHabits();
  }, []);

  //   console.log(habits);

  const toggleHabit = async (event) => {
    setCompleted((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
    await trackHabit({
      user_id: user_id,
      habit_id: event.target.id,
      check: event.target.checked,
    });
  };
  return (
    <div className={styles.habits}>
      <label className={styles.legend}>
        Click on a task to check or uncheck it{" "}
      </label>
      {habits &&
        habits.map((task) => {
          return (
            <div className={styles.habit} key={task._id} htmlFor={task._id}>
              <input
                id={task._id}
                className={styles.checkbox}
                type="checkbox"
                name={task._id}
                onClick={toggleHabit}
              ></input>
              <label htmlFor={task._id}>{task.title}</label>
            </div>
          );
        })}
    </div>
  );
};
export default Habits;
