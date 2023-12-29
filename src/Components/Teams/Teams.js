import styles from "./Teams.module.css";
import getTeams from "../../api/getTeams";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../Context/AuthContext";

const Teams = () => {
  const [userTeam, setUserTeam] = useState();
  const [teams, setTeams] = useState([]);
  const ctx = useContext(AuthContext);
  useEffect(() => {
    const fetchTeams = async () => {
      const teams = await getTeams();
      const user = await ctx.user;
      setUserTeam(user.teamName);
      console.log(userTeam);
      //   console.log(teams);
      setTeams(teams);
    };
    fetchTeams();
  }, []);

  return (
    <div className={styles.teams}>
      {teams &&
        teams?.map((team) => {
          return (
            <div
              className={styles.teamcard}
              style={
                userTeam === team.name
                  ? {
                      boxShadow: " 0px 0px 10px rgba(0, 255, 0, 0.6)",
                    }
                  : { boxShadow: " 0px 0px 10px rgba(0, 0, 0, 0.3)" }
              }
            >
              <div className={styles.logo}>
                <img src={`${team.logo}`} className={styles.logoimg}></img>
              </div>
              <div className={styles.teamdata}>
                <div className={styles.teamname}>{team.name} </div>
                <div className={styles.members}>{team.noOfUsers} Members</div>
              </div>
              <div className={styles.teampoints}>{team.points}</div>
            </div>
          );
        })}
    </div>
  );
};
export default Teams;
