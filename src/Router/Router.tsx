import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "../Pages/cart";
import About from "../Pages/About";
import ProductDetails from "../Pages/productDetails";
import Shop from "../Pages/Shop";
import HomePage from "../Pages/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<HomePage />} />
      <Route path="cart" element={<Cart />} />
      <Route path="about" element={<About />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="shop" element={<Shop />} />
    </Routes>
  );
};

export default Router;
