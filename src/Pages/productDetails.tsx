import React from "react";
import styled from "styled-components";
import product from "../assets/images/product.jpg";
import { ImCancelCircle } from "react-icons/im";

type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const productDetails: React.FC<Props> = ({ setModal }) => {
  return (
    <Container>
      <Wrapper>
        <ImageHolder>
          <Image src={product} />
        </ImageHolder>
        <TextHolder>
          <Icon>
            <ImCancelCircle
              size={30}
              onClick={() => {
                setModal(false);
              }}
            />
          </Icon>
          <Tittle>Hydrate And Detangle Hair spritz</Tittle>
          <Price>$2900</Price>
          <DIv>
            <h5>
              Every lady should at least own a wash day set. Its a necessary if
              you want to start a simple healthy hair care routine.
            </h5>
            <p>
              It contains;
              <br /> 💚4-in-1 Herbal Shampoo (250ml) <br />
              💚Ayurvedic Deep Conditioning Masque (300ml) <br />
              💚Avocado Leave in Conditioner (250ml) <br />
              💚Ayurvedic Hair Buter (250ml) <br />
              💚Intensive Hair Growth Oil (100ml) <br />
            </p>
          </DIv>
        </TextHolder>
      </Wrapper>
    </Container>
  );
};

const DIv = styled.div`
  @media screen and (max-width: 768px) {
    h5 {
      font-size: 15px;
    }
    p {
      font-size: 15px;
    }
  }
`;

const Price = styled.div`
  @media screen and (max-width: 768px) {
  }
`;
const Tittle = styled.div`
  @media screen and (max-width: 768px) {
  }
`;
const Icon = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
  }
`;

const TextHolder = styled.div`
  width: 50%;
`;
const Image = styled.img`
  width: 80%;
  object-fit: cover;
`;
const ImageHolder = styled.div`
  width: 50%;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
  }
`;

const Container = styled.div`
  width: 70%;
  height: 450px;
  /* background: rgba(255, 255, 255, 0.5); */
  background-color: #fff;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 20px;
  margin-bottom: 100px;
  scroll-behavior: auto;
  @media screen and (max-width: 768px) {
    width: 70%;
    height: 500px;
    /* background: rgba(255, 255, 255, 0.5); */
    background-color: #fff;
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 20px;
    scroll-behavior: auto;
  }
`;

export default productDetails;
