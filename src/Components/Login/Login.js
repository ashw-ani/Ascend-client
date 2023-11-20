import React, { useState } from "react";
import styles from "./Login.module.css";
import Logo from "../../assets/Logo_inside.png";
import logoNamed from "../../assets/logo.jpeg";
//for show password

//login button
import login from "../../api/getLogin";
import Button from "./button";

const Login = () => {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showLoader, setShowLoader] = useState(false);
  // handling non-existing user
  const [userNotFound, setuserNotFound] = useState(false);
  //show password
  const [showPassword, setshowPassword] = useState(false);
  const showPasswordHandler = () => {
    setshowPassword(!showPassword);
    return;
  };

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
    setShowLoader(true);
    setuserNotFound(false);
    const data = await login(
      formDetails.email,
      formDetails.password,
      formDetails.rememberMe
    );
    if (data.token) {
      localStorage.setItem("token", data.token);
      setShowLoader(false);
      window.location.href = "/";
    } else {
      // alert("login failed! please check your email and password");
      setuserNotFound(true);
      setShowLoader(false);
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
          {/* <img className={styles.logo_image} src={Logo} alt="logo" /> */}
          <img className={styles.logo_named} src={logoNamed} alt="logonamed" />
        </div>

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
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required="true"
            onChange={formChangeHandler}
          />
          <div className={styles.showPassword}>
            <input onClick={showPasswordHandler} type="checkbox" />
            <p>Show Password</p>
          </div>
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
        {userNotFound && (
          <p className={styles.credentialsError}>
            No User Found with given Email and password
          </p>
        )}

        <Button text="Sign me In" loading={showLoader} />
        <a>Forgot Password?</a>
      </form>
    </div>
  );
};

export default Login;
