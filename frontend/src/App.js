import "./App.css";
// import Header from "./components/layout/Header/Header.js";

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import WebFont from "webfontloader";
import styles from "./index.css";

import Home from "./components/Home/Home";
// import Footer from "./components/layout/Footer/Footer";
// import ProductDetails from "./components/Product/ProductDetails";
// import Products from "./components/Product/Products";
// import LoginSignUp from "./components/User/LoginSignUp";
// import Profile from "./components/User/Profile";
// import Search from "./components/Product/Search";
// import ForgotPassword from "./components/User/ForgotPassword";
// import ResetPassword from "./components/User/ResetPassword";
// import store from "./store";
// import UserOptions from "./components/layout/Header/UserOptions";
// import UpdateProfile from "./components/User/UpdateProfile";
// import UpdatePassword from "./components/User/UpdatePassword";
// import { loadUser } from "./actions/userAction";
// import { loadStripe } from "@stripe/stripe-js";
// import { useSelector } from "react-redux";
// import Loader from "./components/layout/Loader/Loader";
// import Cart from "./components/Cart/Cart";
// import Shipping from "./components/Cart/Shipping";
// import ConfirmOrder from "./components/Cart/ConfirmOrder";
// import Payment from "./components/Cart/Payment";
// import OrderSuccess from "./components/Cart/OrderSuccess";
// import MyOrders from "./components/Order/MyOrders";
// import OrderDetails from "./components/Order/OrderDetails";
// import Dashboard from "./components/Admin/Dashboard";
// import ProductList from "./components/Admin/ProductList";
// import OrderList from "./components/Admin/OrderList";
// import UsersList from "./components/Admin/UsersList";
// import NewProduct from "./components/Admin/NewProduct";
// import ProcessOrder from "./components/Admin/ProcessOrder";
// import UpdateProduct from "./components/Admin/UpdateProduct";
// import ProductReviews from "./components/Admin/ProductReviews";
// import UpdateUser from "./components/Admin/UpdateUser";
// import axios from "axios";

function App() {
  // const { isAuthenticated, user } = useSelector((state) => state.user);
  // const [stripeApiKey, setStripeApiKey] = useState("");
  // const stripePromise = loadStripe("pk_test_yesItsMyRealKey");
  // async function getStripeApiKey() {
  //   const { data } = await axios.get("/api/v1/stripeapikey");

  //   setStripeApiKey(data.stripeApiKey);
  // }

  // useEffect(() => {
  //   WebFont.load({
  //     google: {
  //       families: ["Roboto", "Droid Sans", "Chilanka"],
  //     },
  //   });
  //   store.dispatch(loadUser());
  //   getStripeApiKey();
  // }, []);

  return (
    <Router>
      {/* <Header /> */}
      {/* {isAuthenticated && <UserOptions user={user} />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/loader" element={<Loader />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route exact path="/me/update" element={<UpdateProfile />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/update" element={<UpdatePassword />} />
        <Route path="/shipping" element={<Shipping />} />

        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/process/payment" element={<Payment />} />
        <Route path="/success" element={<OrderSuccess />} />
        <Route path="/orders" element={<MyOrders />} />

        <Route path="/order/confirm" element={<ConfirmOrder />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/orders" element={<OrderList />} />
        <Route path="/admin/users" element={<UsersList />} />
        <Route path="/admin/users" element={<UsersList />} />
        <Route path="/admin/product" element={<NewProduct />} />

        <Route path="/admin/product" element={<NewProduct />} />
        <Route path="/admin/product/:id" element={<UpdateProduct />} />
        <Route path="/admin/order/:id" element={<ProcessOrder />} />
        <Route path="/admin/reviews" element={<ProductReviews />} />
        <Route path="/admin/user/:id" element={<UpdateUser />} />
        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />
        <Route path="/login" element={<LoginSignUp />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
