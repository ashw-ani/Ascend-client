const getEvents = async () => {
  const data = await fetch(`${process.env.REACT_APP_URL}/api/events/getEvents`);

  const result = await data.json();
  // console.log(result);
  return result;
};
export default getEvents;
