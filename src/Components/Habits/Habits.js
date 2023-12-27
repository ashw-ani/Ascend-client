import styles from "./Habits.module.css";
import getHabits from "../../api/getHabits";
import { useState, useEffect, useContext } from "react";
import trackHabit from "../../api/trackHabit";
import * as jwt_decode from "jwt-decode";
import Habit from "./Habit/Habit";

const Habits = (props) => {
  const [habits, setHabits] = useState(null);
  const [completed, setCompleted] = useState({});

  const user_id = jwt_decode.jwtDecode(localStorage.getItem("token")).id;

  useEffect(() => {
    const fetchHabits = async () => {
      const habits = await getHabits(localStorage.getItem("token"));

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
            <Habit task={task} key={task._id} toggleHabit={toggleHabit}></Habit>
          );
        })}
    </div>
  );
};
export default Habits;
