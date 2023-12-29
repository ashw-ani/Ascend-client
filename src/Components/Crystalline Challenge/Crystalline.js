import React from "react";
import styles from "./Crystalline.module.css";

import Board from "./body/Board.js";

const Leaderboard = () => {
  return (
    <div className={styles.leaderboard}>
      <h1 className={styles.phone_heading}>Crystalline Challenge</h1>
      <Board />
    </div>
  );
};

export default Leaderboard;
