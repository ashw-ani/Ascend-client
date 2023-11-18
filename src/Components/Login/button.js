import React from "react";
import styles from "./Login.module.css";
import { ReactComponent as Loader } from "../../assets/signInButton.svg";

const Button = ({ loading, disabled }) => {
  return (
    <button className="submit-btn" disabled={disabled}>
      {!loading ? "Sign Me In" : <Loader className={styles.spinner} />}
    </button>
  );
};

export default Button;
