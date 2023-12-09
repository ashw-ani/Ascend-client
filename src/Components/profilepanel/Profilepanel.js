import styles from "./Profilepanel.module.css";
import fetchSidePanelData from "../../api/fetchSidePanelData";
import { MdAccountCircle } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as jwt_decode from "jwt-decode";

const Profilepanel = (props) => {
  const navigation = useHistory();

  const profileHandler = () => {
    navigation.push("/profile");
  };

  const togglePPHandler = () => {
    setpPState((prevState) => !prevState);
  };

  const [pPState, setpPState] = useState(false);

  const [logos, setLogos] = useState({ pfp: "", teamLogo: "" });

  useEffect(() => {
    const getLogos = async () => {
      const token = localStorage.getItem("token");
      const { id } = jwt_decode.jwtDecode(token);
      const logos = await fetchSidePanelData(id);
      setLogos(logos);
    };
    getLogos();
  }, []);

  return (
    <div className={`${pPState ? styles.profile_panel : styles.closed}`}>
      <div
        onClick={togglePPHandler}
        className={`${styles.controller_button} ${styles.profile_panel_item} ${
          pPState ? styles.close : styles.open
        }`}
      >
        <FaAngleRight />
      </div>
      <div
        className={`${styles.profile_options} ${styles.profile_panel_item}`}
        onClick={() => {
          profileHandler();
          togglePPHandler();
        }}
      >
        {logos.pfp ? (
          <img
            alt="pfp"
            src={logos.pfp}
            className={`${styles.pfpLogo} ${styles.logo}`}
          />
        ) : (
          <MdAccountCircle />
        )}
      </div>
      <div className={`${styles.profile_options}`}>
        {logos.teamLogo && (
          <img alt="team logo" src={logos.teamLogo} className={styles.logo} />
        )}
      </div>
    </div>
  );
};
export default Profilepanel;
