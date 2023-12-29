const getHabits = async (token) => {
  const data = await fetch(
    `${process.env.REACT_APP_URL}/api/habits/getHabits?token=${token}`
  );

  const result = await data.json();
  // console.log(result);
  return result;
};
export default getHabits;
