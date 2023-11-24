import * as jwt_decode from "jwt-decode";

const FetchCustomerDetails = async (token) => {
  // const customerId = '123'; // Replace with the actual customer ID
  // const token = token; // Replace with the actual token
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const tokenData = jwt_decode.jwtDecode(token);

  var raw = JSON.stringify({
    id: tokenData.id,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(
    "https://ascend-server.onrender.com/api/user/profile/details",
    requestOptions
  );
  const data = await response.json();
  return data;
  // const url = "https://ascend-server.onrender.com";
  // const tokenData = jwt_decode.jwtDecode(token);

  // try {
  //   const response = await fetch(`${url}/api/user/profile/details`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ id: JSON.stringify(tokenData.id) }),
  //   });

  //   const user = await response.json();
  //   console.log(JSON.stringify(tokenData.id));

  //   console.log(user);

  //   if (!response.ok) {
  //     throw new Error("Failed to fetch customer details");
  //   }

  //   const data = await response.json();
  //   console.log("Data recieved", data);
  //   // setCustomerDetails(data);
  // } catch (error) {
  //   console.error("Error:", error);
  //   // Handle error appropriately (e.g., show an error message to the user)
  // }
};

export default FetchCustomerDetails;
