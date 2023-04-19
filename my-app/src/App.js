import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import ChangePassword from "./pages/changepassword/ChangePassword";
import ProductsDetail from "./pages/productsdetail/ProductsDetail";
import Detailbill from "./pages/detailbill/Detailbill";
import Cart from "./pages/cart/Cart";
import Templatecart from "./components/templatecart/Templatecart";
import Orderinfo from "./pages/orderinfo/Orderinfo";
import Cartthanks from "./pages/cartthanks/Cartthanks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "./components/feature/cart/cartSlice";

export default function App() {
  const { accessToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken) {
      dispatch(getCart({ accessToken }));
    }
  }, [accessToken]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/productsdetail/:id"
            element={<ProductsDetail />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route
            path="/changepassword/:accessToken"
            element={<ChangePassword />}
          ></Route>
          <Route path="/orderinfo" element={<Orderinfo />}></Route>
          <Route path="/detailbill" element={<Detailbill />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/cartthanks" element={<Cartthanks />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
