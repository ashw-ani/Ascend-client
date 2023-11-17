import React, { useState } from "react";
import styles from "./Login.module.css";
import Logo from "../../assets/Logo_inside.png";

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
      <form method="post" className={styles.login}>
        <img className={styles.logo_image} src={Logo} alt="logo"></img>
        <h1>User Login</h1>
        <h3 className={styles.subloginheading}>Sign in to your account</h3>
        <div className={styles.credentials}>
          <h4>Email</h4>
          <input
            type="email"
            name="email"
            required="true"
            placeholder="Email"
            onChange={formChangeHandler}
          />
          <h4>Password</h4>
          <input
            name="password"
            type="password"
            placeholder="Password"
            required="true"
            onChange={formChangeHandler}
          />
        </div>
        <div className={styles.rememberme}>
          <input className={styles.customcheckbox} type="checkbox" />
          <h4>Remember my preferences</h4>
        </div>
        <button
          type="submit"
          // onClick={submitButtonHandler}
        >
          Sign Me In
        </button>
        <a>Forgot Password?</a>
      </form>
    </div>
  );
};

export default Login;
