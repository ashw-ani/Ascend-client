import React from "react";
import styles from "./Login.module.css";
import { ReactComponent as Loader } from "../../assets/signInButton.svg";

const Button = ({ text, loading }) => {
  return (
    <button className="submit-btn" disabled={loading}>
      {!loading ? text : <Loader className={styles.spinner} />}
    </button>
  );
};

export default Button;
