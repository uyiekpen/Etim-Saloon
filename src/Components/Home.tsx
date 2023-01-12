import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import "./pages.css";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const SliderStyle = styled(Slider)`
    height: 400px;
    width: 100vw;
    text-align: center;
  `;
  return (
    <>
      <SliderStyle {...settings}>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
      </SliderStyle>
    </>
  );
};

export default Home;
