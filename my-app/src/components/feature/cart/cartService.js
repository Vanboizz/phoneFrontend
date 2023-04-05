import axios from "axios";

const addCart = async (idproducts, accessToken) => {
  const response = await axios.post(
    "http://localhost:8000/cart/addcart",
    {
      idproducts,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    }
  );
  return response.data;
};

const getCart = async (accessToken) => {
  const response = await axios.get("http://localhost:8000/cart/getcart", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
  return response.data;
};

const cartService = {
  addCart,
  getCart,
};

export default cartService;
