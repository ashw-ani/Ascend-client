import React, { useState } from "react";
import styles from "./Login.module.css";
import jwt_decode from "jwt-decode";
// import Dashboard

const Login = () => {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });

  const formChangeHandler = (event) => {
    setFormDetails((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const submitButtonHandler = (event) => {
    event.preventDefault();
    console.log(formDetails);
  };
  return (
    <div className={styles.loginpage}>
      <form className={styles.login}>
        <h1>Login Page</h1>
        <input
          required
          type="email"
          name="email"
          placeholder="Username"
          onChange={formChangeHandler}
        />
        <input
          required
          name="password"
          type="password"
          placeholder="Password"
          onChange={formChangeHandler}
        />
        <button type="submit" onClick={submitButtonHandler}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
