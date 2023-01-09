import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import product from "../assets/images/product.jpg";

const Shop = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          Go through our best <span>CATEGORY</span>{" "}
        </Title>
        <PopCategory>
          <AllBtn>All</AllBtn>

          <BrandSel>
            <label>Type</label>
            <select>
              <option value="DEFAULT" disabled hidden>
                Product Type
              </option>
              <option value="Hair kit">Hair kit</option>
              <option value="Hair Accesories">Hair Accesories</option>
              <option value="Earrings">Earrings</option>
            </select>
          </BrandSel>
        </PopCategory>

        <BagsDispHold>
          <BagCard>
            <div>
              <ImgPart>
                <BagImage>
                  <img src={product} alt="" />
                </BagImage>
              </ImgPart>
              <Product>
                <ProdName>Hydrate And Detangle Hair spritz</ProdName>
                <ProdPrice>$200</ProdPrice>
                <Button>See More</Button>
              </Product>
            </div>
          </BagCard>
        </BagsDispHold>
      </Wrapper>
    </Container>
  );
};

export default Shop;

const Button = styled.button`
  height: 50px;
  width: 100px;
  font-size: 15px;
  font-weight: bold;
  background-color: white;
  color: #7418a6;
  border: 3px solid #7418a6;
  margin-top: 20px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: poppins;
  margin-bottom: 100px;
`;
const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 30px;
  span {
    color: darkorange;
    font-weight: 900;
  }

  @media (max-width: 500px) {
    font-size: 20px;
    text-align: center;
  }
`;
const PopCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 60px;
  justify-content: center;
`;
const AllBtn = styled.button`
  height: 40px;
  width: 120px;
  margin-top: 15px;
  font-family: montserrat;
  border: 1px solid #dddddd;
  color: #6d6d6e;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 600;
  background-color: transparent;
  cursor: pointer;

  @media (max-width: 500px) {
    height: 40px;
    width: 100px;
    font-size: 12px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const BrandSel = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  select {
    height: 40px;
    width: 120px;
    font-family: poppins;
    border: 1px solid #dddddd;
    color: #6d6d6e;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  label {
    font-size: 10px;
    font-weight: 600;
    margin-bottom: 3px;
  }

  @media (max-width: 500px) {
    select {
      height: 40px;
      width: 100px;
      font-size: 12px;
    }
  }
`;

const BagsDispHold = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;
const BagCard = styled.div`
  width: 600px;
  height: 400px;
  border: 3px solid whitesmoke;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: flex;

    width: 90%;
  }
  @media screen and (max-width: 600px) {
    width: 400px;
    height: 320px;
    border: 3px solid whitesmoke;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      display: flex;

      width: 90%;
    }
  }
  @media screen and (max-width: 400px) {
    width: 300px;
    height: 300px;
    border: 3px solid whitesmoke;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      display: flex;

      width: 90%;
    }
  }
`;
const ImgPart = styled.div`
  /* justify-content: space-around; */
`;
const LogoImg = styled.div`
  height: 35px;
  margin: 20px 0;
  small {
    font-weight: 300;
    letter-spacing: 5px;
    font-size: 10px;
    font-family: poppins;
  }
`;
const BagImage = styled.div`
  img {
    width: 300px;
    height: 350px;
    object-fit: cover;
  }

  @media screen and (max-width: 600px) {
    img {
      width: 200px;
      height: 280px;
      object-fit: cover;
    }
  }
  @media screen and (max-width: 400px) {
    img {
      width: 150px;
      height: 250px;
      object-fit: cover;
    }
  }
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 250px;
  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 250px;
  }
`;
const ProdName = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #402f3b;
  @media screen and (max-width: 400px) {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #402f3b;
  }
`;
const ProdPrice = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #402f3b;
`;
