const getCourses = async (type) => {
  const data = await fetch(
    `https://ascend-server.onrender.com/api/courses/list?type=${type}&token=${localStorage.getItem(
      "token"
    )}`
  );

  const result = await data.json();

  return result.courses;
};
export default getCourses;
