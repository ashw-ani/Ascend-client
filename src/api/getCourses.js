const getCourses = async (type) => {
  const data = await fetch(
    `${
      process.env.REACT_APP_URL
    }/api/courses/list?tier=${type}&token=${localStorage.getItem("token")}`
  );

  const result = await data.json();
  // console.log(result);
  return result;
};
export default getCourses;
