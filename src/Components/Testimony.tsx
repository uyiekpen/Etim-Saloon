import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import img from "../assets/images/1.jpg";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const SliderStyle = styled(Slider)`
    img {
      height: 50px;
      width: 50px;
      border-radius: 100%;
      object-fit: cover;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 300px;
      width: 80vw;
      padding: 20px;
    }
    h3 {
      font-size: 20px;
    }
  `;

  return (
    <Container>
      <SliderStyle {...settings}>
        <div>
          <img src={img} alt="" />
          <h3>
            {" "}
            To a degree, Lorem Ipsum is gibberish, but it is rooted in a real
            language: Latin. The text's origins are based on a passage from a
            piece of classical Latin literature dating back to 45 BC. That means
            that Lorem Ipsum is more than 2,000 years old! To get specific,
            Lorem Ipsum comes from sections 1.10.19{" "}
          </h3>
          <p>Bukky</p>
        </div>
        <div>
          <img src={img} alt="" />

          <h3>
            {" "}
            To a degree, Lorem Ipsum is gibberish, but it is rooted in a real
            language: Latin. The text's origins are based on a passage from a
            piece of classical Latin literature dating back to 45 BC. That means
            that Lorem Ipsum is more than 2,000 years old! To get specific,
            Lorem Ipsum comes from sections 1.10.19{" "}
          </h3>
          <p>Bukky</p>
        </div>
        <div>
          <img src={img} alt="" />

          <h3>
            {" "}
            To a degree, Lorem Ipsum is gibberish, but it is rooted in a real
            language: Latin. The text's origins are based on a passage from a
            piece of classical Latin literature dating back to 45 BC. That means
            that Lorem Ipsum is more than 2,000 years old! To get specific,
            Lorem Ipsum comes from sections 1.10.19{" "}
          </h3>
          <p>Bukky</p>
        </div>
      </SliderStyle>
    </Container>
  );
};

const Container = styled.div`
  height: 300px;
  width: 100vw;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  font-family: poppins;
`;

export default Home;
