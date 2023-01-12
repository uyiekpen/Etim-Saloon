import React from "react";
import Home from "../Components/Home";
import NewsLetter from "../Components/NewsLetter";
import Team from "../Components/Team";
import About from "../Components/About";
import Testimony from "../Components/Testimony";

const HomePage = () => {
  return (
    <div>
      <Home />
      <About />
      <Team />
      <Testimony />
      <NewsLetter />
    </div>
  );
};

export default HomePage;
