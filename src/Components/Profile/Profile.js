import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Profile.module.css";
import noimage from "../../assets/no-image.svg";
import { ReactComponent as Loader } from "../../assets/signInButton.svg";
import { useState } from "react";
import getProfileUpdate from "../../api/putProfileUpdate";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import putProfileUpdate from "../../api/putProfileUpdate";
import getProfile from "../../api/getProfile";
import FetchCustomerDetails from "../../api/fetchCutomerDetails";
// import Loader from "../UI/loading indicator/Loader";

const Profile = () => {
  // logouthandler
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  //Loading of update button
  const [showLoader, setShowLoader] = useState(false);
  const context = useContext(AuthContext);
  const [formData, setFormData] = useState(context.user);

  //Updating profile Updating
  const [updatePfp, setUpdatePfp] = useState(false);

  useEffect(() => {
    const fetchingTheDetails = async () => {
      const token = localStorage.getItem("token");
      setShowLoader(true);
      const userData = await FetchCustomerDetails(token);

      console.log("my user", userData);

      setFormData(userData);
      setShowLoader(false);
    };
    fetchingTheDetails();
  }, []);

  const formInputHandler = (event) => {
    if (event.target.name === "img") setUpdatePfp(true);

    setFormData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const imageUploadHandler = async (img) => {
    const formData1 = new FormData();
    formData1.append("image", img);
    // console.log("hello from image handler ,", formData1.get("image"));

    const response = await fetch(
      "https://api.imgbb.com/1/upload?key=64e26b821a87b1e73115ba89dac737b1",
      {
        method: "POST",
        body: formData1,
      }
    );
    const result = await response.json();
    setFormData({
      ...formData,
      imgURL: result.data.url,
      showImgURL: result.data.display_url,
    });
    return result.data.url;
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const formData2 = new FormData(event.target);
    setShowLoader(true);

    if (updatePfp) {
      const img = formData2.get("img");
      const newImg = await imageUploadHandler(img);
      await saveDataHandler(newImg);
    } else await saveDataHandler();

    //loading
    setShowLoader(false);

    window.location.reload(true);
  };

  const saveDataHandler = async (newImg) => {
    const token = await putProfileUpdate({
      ...formData,
      profilePic: newImg ? newImg : context.user.profilePic,
    });
    console.log(token);
    // localStorage.removeItem("token");
    localStorage.setItem("token", token);
    getProfile(localStorage.getItem("token"));
  };

  // const name = "fullName";
  const joining = "31st march,2022";
  const end = "LIFE TIME";
  return (
    <div className={styles.container}>
      {showLoader && (
        <div className={styles.spinnerDiv}>
          <Loader className={styles.spinner} />
        </div>
      )}

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
            <div className={styles.profilePicWrapper}>
              <div className={styles.profileimageWrapper}>
                <img
                  src={
                    context.user.profilePic ? context.user.profilePic : noimage
                  }
                  className={styles.profileimage}
                />
              </div>
            </div>
            <h1 className={styles.name}>{formData.fullName}</h1>
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
          <form onSubmit={formSubmitHandler}>
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
                    value={formData.mobile}
                    name="mobile"
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
                  {formData.achievement}
                </div>
              </div>
              <label className={styles.labelheader}>Profile Pic</label>
              <div className={`${styles.single_section}`}>
                <input
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
