import axios from "axios";

const getProducts = async () => {
  const response = await axios.get("http://localhost:3000/getproducts");
  return response.data;
};

const productsService = {
  getProducts,
};

export default productsService;
