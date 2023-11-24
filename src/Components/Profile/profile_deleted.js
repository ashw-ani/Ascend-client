import { NavLink } from "react-router-dom";
import styles from "./Profile.module.css";
import noimage from "../../assets/no-image.svg";
import { ReactComponent as Loader } from "../../assets/signInButton.svg";
import { useState } from "react";
import * as jwt_decode from "jwt-decode";
import getProfileUpdate from "../../api/getProfileUpdate";

const Profile = () => {
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
  //Loading of update button
  const [showLoader, setShowLoader] = useState(false);
  const [User, setUser] = useState("");

  //update profile pic thingy
  const [updatePfp, setUpdatePfp] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = jwt_decode.jwtDecode(token);
    console.log(user);
    setUser(user);

    setFormData({
      ...formData,
      firstName: user["firstName"],
      lastName: user["lastName"],
      email: user["email"],
      phone: user["mobile"],
      city: user["city"],
      niche: user["niche"],
      achievementLevel: user["achievement"],
      imgURL: user["profilePic"],
      showImgURL: user["profilePic"],
    });
  }, []);

  const name = User["fullName"];
  const joining = "31st march,2022";
  const end = "LIFE TIME";

  const userUpdateHandler = async (User) => {
    const userData = User;
    console.log(userData);
    const userResponse = await getProfileUpdate(userData);
  };

  const imageUploadHandler = async (img) => {
    console.log(img);
    const formData1 = new FormData();
    formData1.append("image", img);

    const response = fetch(
      "https://api.imgbb.com/1/upload?key=64e26b821a87b1e73115ba89dac737b1",
      {
        method: "POST",
        body: formData1,
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setFormData({
          ...formData,
          imgURL: result.data.url,
          showImgURL: result.data.display_url,
        });
      });
  };

  const formInputHandler = (event) => {
    if (event.target.name == "img") setUpdatePfp(true);

    setFormData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });

    console.log("changed");
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    setShowLoader(true);
    if (updatePfp) {
      const formData2 = new FormData(event.target);
      const img = formData2.get("img");
      imageUploadHandler(img);
    }

    const user = {
      id: User.id,
      fullName: `${formData.firstName} ${formData.lastName}`,
      firstName: formData.firstName,
      lastName: formData.lastName,
      mobile: formData.phone,
      email: formData.email,
      city: formData.city,
      niche: formData.niche,
      achievement: formData.achievementLevel,
      profilePic: formData.imgURL,
      team: User.team,
    };
    userUpdateHandler(formData);

    let newToken = await getProfileUpdate(user);
    // if (!newToken) {
    //   newToken =
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFzaHdhbmlzaGFybWEiLCJmdWxsTmFtZSI6ImFzaHdhbmkgc2hhcm1hIiwiZmlyc3ROYW1lIjoiYXNod2FuaSIsImxhc3ROYW1lIjoic2hhcm1hIiwiZW1haWwiOiJhc2h3YW5pc2hhcm1hNzIwMDJAZ21haWwuY29tIiwibW9iaWxlIjoiIiwiY2l0eSI6ImRlbGhpIiwibmljaGUiOiJlbmdpbmVlciIsImFjaGlldmVtZW50IjoiYWR2YW5jZWQiLCJwcm9maWxlUGljIjoiIiwidGVhbSI6ImRldmVsb3BlciIsImlhdCI6MTcwMDQ2NjE1MSwiZXhwIjoxNzAwNTUyNTUxfQ.QZzsTi_uk9YBhtkCF_UXa_3a3JiZ9vWVwILejsuTUgw";
    // }
    localStorage.setItem("token", newToken);

    setTimeout(() => {
      console.log("hello");
      setShowLoader(false);
    }, 3000);
    console.log(formData);
    setFormData(formData);
  };

  // logouthandler
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

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
                    value={formData.phone}
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
                  {formData.achievementLevel}
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
              {/* <Button text="Update Profile" loading={showLoader} /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
