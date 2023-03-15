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

const userService = {
  registerUser,
  loginUser,
};

export default userService;
