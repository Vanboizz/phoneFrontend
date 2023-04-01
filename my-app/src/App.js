import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import ChangePassword from "./pages/changepassword/ChangePassword";
import ProductsDetail from "./pages/productsdetail/ProductsDetail";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Detailbill from "./pages/detailbill/Detailbill";
import Cart from "./pages/cart/Cart";
import Statusorder from "./components/statusorder/Statusorder";
import Templatecart from "./components/templatecart/Templatecart";
import Totalcart from "./components/totalcart/Totalcart";
import Orderinfo from "./pages/orderinfo/Orderinfo";
import Cartthanks from "./pages/cartthanks/Cartthanks";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/productsdetail/:id" element={<ProductsDetail/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path="/header" element={<Header />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/templatecart" element={<Templatecart />}></Route>
          <Route path="/orderinfo" element={<Orderinfo />}></Route>
          <Route path="/detailbill" element={<Detailbill />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/statusorder" element={<Statusorder />}></Route>
          <Route path="/totalcart" element={<Totalcart />}></Route>
          <Route path="/cartthanks" element={<Cartthanks />}></Route>
          <Route path="/changepassword/:accessToken" element={<ChangePassword />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
