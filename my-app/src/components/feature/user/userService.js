import axios from "axios";

//Register
const registerUser = async ({ fullname, email, password }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(
    "http://localhost:8000/auth/register",
    {
      fullname: fullname,
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
    "http://localhost:8000/auth/login",
    {
      email: email,
      password: password,
    },
    config
  );
  localStorage.setItem("accessToken", response.data.accessToken);
  console.log(response.data.accessToken);
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
    "http://localhost:8000/auth/forgotpassword",
    {
      email: email,
    },
    config
  );
  return response.data;
};

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
      `http://localhost:8000/auth/changepassword/${window.location.href.substring(
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
const userService = {
  registerUser,
  loginUser,
  forgotPassword,
  changePassword,
};

export default userService;
