const getEvents = async () => {
  const data = await fetch(
    `https://ascend-server.onrender.com/api/admin/events/testing`
  );

  const result = await data.json();
  // console.log(result);
  return result;
};
export default getEvents;
