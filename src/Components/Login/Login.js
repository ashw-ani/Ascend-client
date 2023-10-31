import React from 'react';
import styles from './Login.module.css';

const Login = () => {
  const submitButtonHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className={styles.login}>
      <h1>Login Page</h1>
      <input type='text' placeholder='Username' />
      <input type='password' placeholder='Password' />
      <button onClick={submitButtonHandler}>Login</button>
    </form>
  );
};

export default Login;
