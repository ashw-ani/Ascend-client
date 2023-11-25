const getCourses = async () => {
  const data = await fetch(
    "https://ascend-server.onrender.com/api/courses/list"
  );

  const result = await data.json();
  console.log(result);
  return result;
};
export default getCourses;
