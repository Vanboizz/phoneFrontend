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

const userService = {
  registerUser,
};

export default userService;
