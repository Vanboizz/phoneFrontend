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
import Orderinfo from "./pages/orderinfo/Orderinfo";
import Cartthanks from "./pages/cartthanks/Cartthanks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "./components/feature/cart/cartSlice";
import Profile from "./pages/profile/Profile";
import ProductsModifier from "./pages/productsmodifier/ProductsModifier";
import AdminRegister from "./pages/adminregister/AdminRegister";
import PrivateRoute from "./components/hook/PrivateRoute";
import PrivateRouteAdmin from "./components/hook/PrivateRouteAdmin";

import ProductList from "./pages/productlist/ProductList";

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
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route
            path="/changepassword/:accessToken"
            element={<ChangePassword />}
          ></Route>
          {/* user */}
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route
              path="/productsdetail/:id"
              element={<ProductsDetail />}
            ></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/orderinfo" element={<Orderinfo />}></Route>
            <Route path="/detailbill" element={<Detailbill />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/cartthanks" element={<Cartthanks />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Route>

          {/* admin */}
          <Route path="/admin" element={<PrivateRouteAdmin />}>
            <Route
              path="/admin/productsmodifier"
              element={<ProductsModifier />}
            />
          </Route>
          <Route path="/admin/productlist" element={<ProductList />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
