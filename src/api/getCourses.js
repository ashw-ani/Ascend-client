const getCourses = async (type) => {
  const data = await fetch(
    `https://ascend-server.onrender.com/api/courses/list?tier=${type}&token=${localStorage.getItem(
      "token"
    )}`
  );

  const result = await data.json();
  // console.log(result);
  return result;
};
export default getCourses;
