import React, { useState } from "react";
import styles from "./Login.module.css";
import Logo from "../../assets/Logo_inside.png";
import login from "../../api/getLogin";

const Login = () => {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const formChangeHandler = (event) => {
    setFormDetails((prevState) => {
      if (event.target.name == "rememberMe") {
        return { ...prevState, [event.target.name]: event.target.checked };
      }
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const submitButtonHandler = async (event) => {
    event.preventDefault();
    // console.log(formDetails);
    const data = await login(
      formDetails.email,
      formDetails.password,
      formDetails.rememberMe
    );
    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
    } else {
      alert("login failed! please check your email and password");
    }
  };
  return (
    <div className={styles.loginpage}>
      <form
        method="post"
        className={styles.login}
        onSubmit={submitButtonHandler}
      >
        <div className={styles.logowrapper}>
          <img className={styles.logo_image} src={Logo} alt="logo" />
        </div>
        <h1>User Login</h1>
        <h3 className={styles.subloginheading}>Sign in to your account</h3>
        <div className={styles.credentials}>
          <h4 className={styles.label}>Email</h4>
          <input
            type="email"
            name="email"
            required="true"
            placeholder="Email"
            onChange={formChangeHandler}
          />
          <h4 className={styles.label}>Password</h4>
          <input
            name="password"
            type="password"
            placeholder="Password"
            required="true"
            onChange={formChangeHandler}
          />
        </div>
        <div className={styles.rememberme}>
          <input
            className={styles.customcheckbox}
            name="rememberMe"
            onChange={formChangeHandler}
            type="checkbox"
          />
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
