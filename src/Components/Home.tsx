import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import "./pages.css";

const Home = () => {
  return (
    <>
      <div className="Herobg">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={img1} alt="First slide" />
            <Carousel.Caption>
              <h3>Your Hair Deserves the Best Hair Care</h3>
              <p>Natural hair beauty saloon</p>
              <button>Read More</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={img2} alt="Second slide" />
            <Carousel.Caption>
              <h3>Your Hair Deserves the Best Hair Care</h3>
              <p>Natural hair beauty saloon</p>
              <button>Read More</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />
            <Carousel.Caption>
              <h3>Your Hair Deserves the Best Hair Care</h3>
              <p>Natural hair beauty saloon</p>
              <button>Read More</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img4} alt="Third slide" />
            <Carousel.Caption>
              <h3>Your Hair Deserves the Best Hair Care</h3>
              <p>Natural hair beauty saloon</p>
              <button>Read More</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Home;
