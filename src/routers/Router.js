import React from "react";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import AllProducts from "../admin/AllProducts";
import AddProducts from "../admin/AddProducts";
import Dashboard from "../admin/Dashboard";
import Users from "../admin/Users";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop/:id" element={<ProductDetails />} />
      {/* <Route path="/*" element={<ProtectedRoutes/>}> */}
      <Route path="checkout" element={<Checkout />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="dashboard/allproducts" element={<AllProducts />} />
      <Route path="dashboard/addproducts" element={<AddProducts />} />
      <Route path="dashboard/users" element={<Users />} />

      {/* </Route>  */}

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Router;
