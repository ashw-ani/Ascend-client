const Getranks = async (reqtype) => {
  //   console.log(process.env.REACT_APP_API_URL);
  const Data = await fetch(
    "https://script.google.com/macros/s/AKfycbzgZ9YJJK_2iqn7Iu5V6f99Yj2mVAWqyVDVYS8L5cbq8nvqukXJsf-H88tQmqN9VF-RJA/exec?reqtype=alltime"
  );
  const result = await Data.json();

  return result;
};

export default Getranks;
