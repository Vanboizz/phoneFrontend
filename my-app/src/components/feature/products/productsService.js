import axios from "axios";

const getProducts = async () => {
  const response = await axios.get("http://localhost:8000/product/getproduct");
  return response.data;
};

const addProducts = async () => {
  const response = await axios.post(
    "http://localhost:8000/product/getproduct",
    {}
  );
};

const productsService = {
  getProducts,
};

export default productsService;
