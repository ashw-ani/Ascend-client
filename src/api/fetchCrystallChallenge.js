const Getranks = async (reqtype) => {
  //   console.log(process.env.REACT_APP_API_URL);
  const Data = await fetch(
    "https://script.google.com/macros/s/AKfycbzZFyXCofgPiNKCUn3ueZ8GGnCWxQqvesrmqmrEGivj0UYSIHnYQWh1cTWRC6M8PhcF/exec?reqtype=alltime"
  );
  const result = await Data.json();

  return result;
};

export default Getranks;
