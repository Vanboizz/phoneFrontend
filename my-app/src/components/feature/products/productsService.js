import axios from "axios";

const getProducts = async () => {
  const response = await axios.get("http://localhost:8000/product/getproduct");
  return response.data;
};

const addProducts = async ({ product }) => {
  const response = await axios.post(
    "http://localhost:8000/product/addproduct",
    product,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

const productsService = {
  getProducts,
  addProducts,
};

export default productsService;
