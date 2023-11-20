import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Profile.module.css";
import noimage from "../../assets/no-image.svg";
import { ReactComponent as Loader } from "../../assets/signInButton.svg";
import { useState } from "react";
import * as jwt_decode from "jwt-decode";
import getProfileUpdate from "../../api/putProfileUpdate";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Profile = () => {
  // logouthandler
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  //Loading of update button
  const [showLoader, setShowLoader] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    niche: "",
    achievementLevel: "",
    imgURL: "",
    showImgURL: "",
    img: "",
  });

  const formInputHandler = (event) => {
    setFormData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
    console.log(formData);
  };

  const name = "fullName";
  const joining = "31st march,2022";
  const end = "LIFE TIME";
  return (
    <div className={styles.container}>
      <div className={styles["page-titles"]}>
        <NavLink className={styles.pageTitleItems} to="/">
          Home /{" "}
        </NavLink>{" "}
        <p className={styles.pageTitleItems}>Profile</p>
        <button onClick={handleLogout} className={styles.pageTitleItems}>
          Logout
        </button>
      </div>

      <div className={styles["page-body"]}>
        <div className={styles["profile-view"]}>
          <h2 className={styles.heading}>Profile View</h2>
          <hr className={styles.line} />

          <div className={styles.personal}>
            <img
              src={formData.showImgURL ? formData.showImgURL : noimage}
              className={styles.profileimage}
            />
            <h1 className={styles.name}>{name}</h1>
            <p>
              <b>Joining date : </b>
              <i>{joining}</i>
            </p>
            <p>
              <b>End Date : </b>
              <i>{end}</i>
            </p>
          </div>
          <hr className={styles.line} />
          <div className={styles.stats}>
            <div className={styles.singlestat}>
              <p>0</p>
              <p>Total Points</p>
            </div>
            <div className={styles.singlestat}>
              <p>0</p>
              <p>Total Points</p>
            </div>
            <div className={styles.singlestat}>
              <p>$0</p>
              <p>Charity Given</p>
            </div>
            <div className={styles.singlestat}>
              <p>$0</p>
              <p>Revenue Earned</p>
            </div>
          </div>
        </div>

        {/* Profile edit */}

        <div className={styles["profile-edit"]}>
          <form>
            <h2 className={styles.heading}>Edit Profile</h2>
            <hr className={styles.line} />

            <div className={styles.details}>
              <div className={styles["double-section"]}>
                <div className={styles["double-labels"]}>
                  <label className={styles.labelheader}>
                    First Name
                    <b>*</b>
                  </label>
                  <input
                    required
                    value={formData.firstName}
                    name="firstName"
                    // onChange={formInputHandler}
                    type="text"
                    name="firstName"
                    onChange={formInputHandler}
                    type="text"
                    className={styles.inputer}
                    placeholder="Enter User First Name"
                  />
                </div>
                <div className={styles["double-labels"]}>
                  <label className={styles.labelheader}>
                    Second Name
                    <b>*</b>
                  </label>
                  <input
                    required
                    value={formData.lastName}
                    name="lastName"
                    // onChange={formInputHandler}
                    type="text"
                    name="lastName"
                    onChange={formInputHandler}
                    type="text"
                    className={styles.inputer}
                    placeholder="Enter User Second Name"
                  />
                </div>
              </div>
              <div className={styles["single-section"]}>
                <label className={styles.labelheader}>Email Address</label>
                <input
                  required
                  value={formData.email}
                  namae="email"
                  type="text"
                  className={`${styles.emailinput} ${styles.inputer}`}
                  disabled
                />
              </div>
              <div className={styles["double-section"]}>
                <div className={styles["double-labels"]}>
                  <label className={styles.labelheader}>
                    Phone Number
                    <b>*</b>
                  </label>
                  <input
                    required
                    type="tel"
                    // pattern="^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$"
                    title="Enter a valid phone number."
                    value={formData.phone}
                    name="phone"
                    // onChange={formInputHandler}
                    name="phone"
                    onChange={formInputHandler}
                    className={styles.inputer}
                    placeholder="Enter Phone Number"
                  />
                </div>
                <div className={styles["double-labels"]}>
                  <label className={styles.labelheader}>
                    City
                    <b>*</b>
                  </label>
                  <input
                    required
                    value={formData.city}
                    name="city"
                    // onChange={formInputHandler}
                    type="text"
                    name="city"
                    onChange={formInputHandler}
                    type="text"
                    className={styles.inputer}
                    placeholder="City"
                  />
                </div>
              </div>
              <div className={styles["single_section"]}>
                <label className={styles.labelheader}>
                  Niche
                  <b>*</b>
                </label>
                <select
                  className={styles.nicheselect}
                  name="niche"
                  // onChange={formInputHandler}
                  name="niche"
                  onChange={formInputHandler}
                >
                  <option value="" selected disabled>
                    Please select a niche
                  </option>
                </select>
              </div>
              <div className={`${styles.single_section}`}>
                <label className={styles.labelheader}>Achievement Level</label>
                <div className={styles.achievement_level}>
                  {formData.achievementLevel}
                </div>
              </div>
              <label className={styles.labelheader}>Profile Pic</label>
              <div className={`${styles.single_section}`}>
                <input
                  name="img"
                  // onChange={formInputHandler}
                  name="img"
                  onChange={formInputHandler}
                  className={styles.photo_select}
                  type="file"
                  accept="image/png, image/jpeg, image/jpg,"
                />
              </div>
              <button type="submit" className={styles.submit_details}>
                {showLoader ? (
                  <Loader className={styles.spinner} />
                ) : (
                  "Update Profile"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
