import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/cart";
import About from "../Pages/About";
import ProductDetails from "../Pages/productDetails";
import Shop from "../Pages/Shop";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="about" element={<About />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="shop" element={<Shop />} />
    </Routes>
  );
};

export default Router;
