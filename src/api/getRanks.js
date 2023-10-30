const Getranks = async (reqtype) => {
  //   console.log(process.env.REACT_APP_API_URL);
  const Data = await fetch(
    'https://script.google.com/macros/s/AKfycbwIpbfR-T_ThTety4DrKQ4DNVzBSMJ4hRt5s-NinLq8wyZbayf4-CwgFte2cOwv2_bn/exec?reqtype=' +
      reqtype
  );
  const result = await Data.json();

  return result;
};

export default Getranks;
