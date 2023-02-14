import React from "react";
import Home from "../Components/Home";
import NewsLetter from "../Components/NewsLetter";
import Team from "../Components/Team";
import About from "../Components/About";
import Testimony from "../Components/Testimony";
import BestSelling from "../Components/BestSelling";

const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <BestSelling />

      <Testimony />
    </>
  );
};

export default HomePage;
