import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <AbtBag>
          <Logo src={logo} />
        </AbtBag>
        <OtherNav>
          <Holder>
            <Title>Menu</Title>
            <span>Home</span>
            <span>about</span>
            <span>Pricing</span>
            <span>shop</span>
            <span>Blog</span>
          </Holder>
          <Holder>
            <Title>Help</Title>
            <span>FAQ</span>
            <span>Privacy Policy</span>
            <span>Terms and Conditions</span>
          </Holder>
          <Holder>
            <Title>Follow us</Title>
            <span>
              <WhatsAppIcon />
              <a>Whatsapp</a>
            </span>
            <span>
              <FacebookIcon />
              <a>facebook</a>
            </span>
            <span>
              <InstagramIcon />
              <a>instagram</a>
            </span>

            <span>
              <LinkedInIcon />
              <a>linkedin</a>
            </span>
          </Holder>
        </OtherNav>
      </Wrapper>
      <small>Developed by @osas</small>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  font-family: Poppins;
  width: 100%;
  height: 100%;
  min-height: 60vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction: column;
  margin-top: 20px;
  small {
    font-size: 10px;
    margin-bottom: 10px;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;
const AbtBag = styled.div`
  margin-bottom: 10px;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 30px;
  }
  button {
    height: 30px;
    width: 100px;
    background-color: orange;
    font-weight: 600;
    color: #fff;
    border: none;
    outline: none;
  }
`;
const Logo = styled.img`
  height: 70px;
  width: 100%;
  object-fit: contain;
`;
const Text = styled.div`
  width: 250px;
  font-size: 12px;
  margin-bottom: 15px;
`;
const OtherNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  justify-content: space-between;
  @media (max-width: 500px) {
    justify-content: center;
    flex-direction: column;
  }
`;
const Holder = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  color: white;
  font-size: 15px;

  @media (max-width: 500px) {
    align-items: center;
    margin-bottom: 20px;
  }

  span {
    margin: 10px 0;
    font-size: 13px;
    color: white;
  }
  a {
    margin: 10px;
  }
`;
const Title = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 25px;
`;
