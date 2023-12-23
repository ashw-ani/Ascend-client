const getEvents = async () => {
  const data = await fetch(
    `https://ascend-server.onrender.com/api/events/getEvents`
  );

  const result = await data.json();
  // console.log(result);
  return result;
};
export default getEvents;
