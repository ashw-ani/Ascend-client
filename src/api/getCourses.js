const getCourses = async (type) => {
  const data = await fetch(
    `https://ascend-server.onrender.com/api/courses/list?type=${type}`
  );

  const result = await data.json();

  return result;
};
export default getCourses;
