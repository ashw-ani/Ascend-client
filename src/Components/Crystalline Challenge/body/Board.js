import styles from "./Board.module.css";
import Listitem from "./listitem/ListItem";
import { useEffect, useState } from "react";
import Getranks from "../../../api/fetchCrystallChallenge";
import Loader from "../../UI/loading indicator/Loader";

const colors = ["red", "yellow", "orange", "magenta", "cyan"];

const Board = () => {
  const [leaderboardList, setLeaderboardList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function bubbleSortAlgo(list) {
    var arr = list;
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length - i - 1; j++) {
        if (parseInt(arr[j].score) < parseInt(arr[j + 1].score)) {
          var tempValue = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tempValue;
        }
      }
    }
    return arr;
  }

  useEffect(() => {
    const getDetails = async () => {
      setIsLoading(true);
      const scoreData = await Getranks();
      setLeaderboardList(bubbleSortAlgo(scoreData));
      setIsLoading(false);
    };
    getDetails();
  }, []);

  return (
    <div className={styles.board}>
      {isLoading ? (
        <Loader />
      ) : (
        leaderboardList &&
        leaderboardList.map((item, index) => {
          let i = index % 5;
          return <Listitem color={colors[i]} key={index} details={item} />;
        })
      )}
    </div>
  );
};
export default Board;
