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

          <div className={styles.details}>
            <div className={styles['double-section']}>
              <div className={styles['double-labels']}>
                <label className={styles.labelheader}>
                  First Name
                  <b
                    style={{
                      color: 'red',
                      'font-size': '0.95rem',
                      'margin-left': '3px',
                    }}
                  >
                    *
                  </b>
                </label>
                <input
                  type='text'
                  className={styles.inputer}
                  placeholder='Enter User First Name'
                />
              </div>
              <div className={styles['double-labels']}>
                <label className={styles.labelheader}>
                  Second Name
                  <b
                    style={{
                      color: 'red',
                      'font-size': '0.95rem',
                      'margin-left': '3px',
                    }}
                  >
                    *
                  </b>
                </label>
                <input
                  type='text'
                  className={styles.inputer}
                  placeholder='Enter User Second Name'
                />
              </div>
            </div>
            <div className={styles['single-section']}>
              <label className={styles.labelheader}>Email Address</label>
              <input
                type='text'
                value='gaurav262001@gmail.com'
                className={`${styles.emailinput} ${styles.inputer}`}
                disabled
              />
            </div>
            <div className={styles['double-section']}>
              <div className={styles['double-labels']}>
                <label className={styles.labelheader}>
                  Phone Number
                  <b
                    style={{
                      color: 'red',
                      'font-size': '0.95rem',
                      'margin-left': '3px',
                    }}
                  >
                    *
                  </b>
                </label>
                <input
                  type='text'
                  className={styles.inputer}
                  placeholder='Enter Phone Number'
                />
              </div>
              <div className={styles['double-labels']}>
                <label className={styles.labelheader}>
                  City
                  <b
                    style={{
                      color: 'red',
                      'font-size': '0.95rem',
                      'margin-left': '3px',
                    }}
                  >
                    *
                  </b>
                </label>
                <input
                  type='text'
                  className={styles.inputer}
                  placeholder='Enter Phone'
                />
              </div>
            </div>
            <div className={styles['single-section']}>
              <label className={styles.labelheader}>
                Niche
                <b
                  style={{
                    color: 'red',
                    'font-size': '0.95rem',
                    'margin-left': '3px',
                  }}
                >
                  *
                </b>
              </label>
              <select className={styles.nicheselect}>
                <option value='' selected disabled>
                  Please select a niche
                </option>
              </select>
            </div>
            <div className={styles['single-section']}>
              <label className={styles.labelheader}>Achievement Level</label>
              <button
                style={{
                  'margin-bottom': '10px',
                  width: '4rem',
                  height: '2rem',
                }}
              >
                Starter
              </button>
            </div>
            <div className={styles['single-section']}>
              <label className={styles.labelheader}>Profile Pic</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
