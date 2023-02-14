import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import img from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";

const Home = () => {
  return (
    <Container>
      <Carousel fade>
        <Carousel.Item>
          <Image className="d-block w-100" src={img} alt="First slide" />
          <Carousel.Caption>
            <button>Book appointment</button>

            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption>
            <button>Book appointment</button>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
            <button>Book appointment</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Home;

const Image = styled.img`
  height: 90vh;
  width: 100%;
  object-fit: cover;
`;

const Container = styled.div`
  margin-bottom: 100px;
  button {
    height: 50px;
    width: 180px;
    font-family: poppins;
    text-transform: capitalize;
    border: none;
    background-color: black;
    color: white;
  }
`;
