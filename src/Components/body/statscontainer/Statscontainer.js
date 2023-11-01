import styles from "./Statscontainer.module.css";
import Statcard from "./statcards/Statcard";
import cardData from "../../helper/statCardData";
import uniqid from "uniqid";

const Statscontainer = (props) => {
  return (
    <div className={styles.statscontainer}>
      {cardData.colors.map((color, index) => (
        <Statcard
          color={color}
          key={uniqid()}
          title={cardData.title[index]}
          value="0"
          cardart={cardData.clipart[index]}
        />
      ))}
    </div>
  );
};
export default Statscontainer;
