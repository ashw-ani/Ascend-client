import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles['page-titles']}>
        <NavLink to='/'>Home / </NavLink> Profile
      </div>
      <div className={styles['page-body']}></div>
    </div>
  );
};

export default Profile;
