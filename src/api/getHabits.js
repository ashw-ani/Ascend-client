const getHabits = async () => {
  const data = await fetch(
    `https://ascend-server.onrender.com/api/habits/getHabits`
  );

  const result = await data.json();
  // console.log(result);
  return result;
};
export default getHabits;
