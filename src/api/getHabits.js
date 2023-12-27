const getHabits = async (token) => {
  const data = await fetch(
    `https://ascend-server.onrender.com/api/habits/getHabits?token=${token}`
  );

  const result = await data.json();
  // console.log(result);
  return result;
};
export default getHabits;
