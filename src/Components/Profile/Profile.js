import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles['page-titles']}>
        <NavLink to='/'>Home / </NavLink> Profile
      </div>
      <div className={styles['page-body']}>
        <div className={styles['profile-view']}>
          <h2 className={styles.heading}>Profile View</h2>
          <hr className={styles.line} />
        </div>
        <div className={styles['profile-edit']}>
          <h2 className={styles.heading}>Edit Profile</h2>
          <hr className={styles.line} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
