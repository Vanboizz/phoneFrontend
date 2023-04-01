import axios from "axios";

const getProducts = async () => {
  const response = await axios.get("http://localhost:8000/product/getproduct");
  return response.data;
};

const productsService = {
  getProducts,
};

export default productsService;
