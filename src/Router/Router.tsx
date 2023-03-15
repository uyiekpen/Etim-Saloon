import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import ProductDetails from "../Pages/productDetails";
import Shop from "../Pages/Shop";
import HomePage from "../Pages/HomePage";
import Prices from "../Pages/Prices";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<HomePage />} />
      <Route path="pricing" element={<Prices />} />
      <Route path="about" element={<About />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="shop" element={<Shop />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
