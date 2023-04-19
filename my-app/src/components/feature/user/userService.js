import axios from "axios";

//Register
const registerUser = async ({ fullname, phonenumber, email, password }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(
    "http://localhost:8000/auth/user/register",
    {
      fullname: fullname,
      phonenumber: phonenumber,
      email: email,
      password: password,
    },
    config
  );
  console.log(response.data);
  return response.data;
};

const loginUser = async ({ email, password }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(
    "http://localhost:8000/auth/user/login",
    {
      email: email,
      password: password,
    },
    config
  );
  localStorage.setItem("accessToken", response.data.accessToken);
  return response.data;
};

//forgot password
const forgotPassword = async ({ email }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(
    "http://localhost:8000/auth/user/forgotpassword",
    {
      email: email,
    },
    config
  );
  return response.data;
};

//change password
const changePassword = async ({ password, retypeNewPassword }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (password !== retypeNewPassword) {
    console.log("Password is not match");
  } else {
    const response = await axios.post(
      `http://localhost:8000/auth/user/changepassword/${window.location.href.substring(
        window.location.href.lastIndexOf("/") + 1
      )}`,
      {
        password: password,
      },
      config
    );
    console.log(response.data);
    return response.data;
  }
};

//get user
const getUser = async ({ accessToken }) => {
  const response = await axios.get("http://localhost:8000/auth/user/getuser", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
  return response.data;
};

const updateUser = async ({
  phonenumber,
  province,
  district,
  wards,
  address,
  accessToken,
}) => {
  // const respone = await axios.post(
  //   "http://localhost:8000/invoice/checkout",
  //   { phonenumber, province, district, wards, address },
  //   {
  //     headers: {
  //       Authorization: "Bearer " + accessToken,
  //     },
  //   }
  // );
  // console.log(respone.data);
  // return respone.data;
};

const userService = {
  registerUser,
  loginUser,
  forgotPassword,
  changePassword,
  getUser,
  updateUser,
};

export default userService;
