import styles from "./Board.module.css";
// import userSeeds from "../../../seeds/userSeeds";
import Listitem from "./listitem/ListItem";
import { useEffect, useState } from "react";
import Timefilter from "./timefilter/Timefilter";
import Getranks from "../../../api/getRanks";
import Loader from "../../UI/loading indicator/Loader";

const colors = ["red", "yellow", "orange", "magenta", "cyan"];
const d = [8, 7, 6, 5, 4, 3, 2, 1];

const Board = (props) => {
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

  const fetcher = async (name) => {
    setIsLoading(true);
    const reqtype = await Getranks(name);
    setLeaderboardList(bubbleSortAlgo(reqtype));
    setIsLoading(false);
    console.log(leaderboardList);
  };

  useEffect(() => {
    // For hosting purposes
    //setLeaderboardList([...userSeeds.sort((a, b) => a.score < b.score)]);
    const getDetails = async () => {
      setIsLoading(true);
      const scoreData = await Getranks("daily");
      setLeaderboardList(bubbleSortAlgo(scoreData));
      setIsLoading(false);
      // setLeaderboardList(scoreData);
      // console.log(leaderboardList);
      // console.log(scoreData);
    };
    getDetails();
  }, []);

  return (
    <div className={styles.board}>
      <Timefilter fetcher={fetcher} />
      {/* <Loader /> */}
      {isLoading ? (
        <Loader />
      ) : (
        leaderboardList &&
        leaderboardList.map((item, index) => {
          let i = index % 5;
          return <Listitem color={colors[i]} key={index} details={item} />;
        })
      )}

      {/* {} */}
    </div>
  );
};
export default Board;
