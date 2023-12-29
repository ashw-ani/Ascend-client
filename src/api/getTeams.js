const getTeams = async (token) => {
  const data = await fetch(`${process.env.REACT_APP_URL}/api/teams/getTeams`);

  const result = await data.json();
  // console.log(result);
  return result;
};
export default getTeams;
