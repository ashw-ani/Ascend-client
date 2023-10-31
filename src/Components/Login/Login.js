import React, { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
  const [formDetails, setFormDetails] = useState({
    email: '',
    password: '',
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
    <form className={styles.login}>
      <h1>Login Page</h1>
      <input
        type='email'
        name='email'
        placeholder='Username'
        onChange={formChangeHandler}
      />
      <input
        name='password'
        type='password'
        placeholder='Password'
        onChange={formChangeHandler}
      />
      <button onClick={submitButtonHandler}>Login</button>
    </form>
  );
};

export default Login;
