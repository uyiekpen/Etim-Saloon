import React from "react";
import styled from "styled-components";
import img from "../assets/images/3.jpg";

const Team = () => {
  return (
    <Component>
      <Wrapper>
        <Text>Meet the Team</Text>
        <Line />
        <CardHolder>
          <Card>
            <Image src={img} alt="" />
            <div>
              Thoedora <p>FOUDER/ RESIDENT TRICHOLOGIST</p>
            </div>
            <Div />
          </Card>
          <Card>
            <Image src={img} alt="" />
            <div>
              Thoedora <p>FOUDER/ RESIDENT TRICHOLOGIST</p>
            </div>
            <Div />
          </Card>
          <Card>
            <Image src={img} alt="" />
            <div>
              Thoedora <p>FOUDER/ RESIDENT TRICHOLOGIST</p>
            </div>
            <Div />
          </Card>
        </CardHolder>
      </Wrapper>
    </Component>
  );
};
const Div = styled.div`
  width: 100px;
  margin-top: 20px;
  border: 3px solid #d2b3e3;
  background-color: #d2b3e3;
`;

const Image = styled.img`
  height: 400px;
  width: 300px;
  object-fit: cover;
  border-radius: 10px;
  @media screen and (max-width: 360px) {
    height: 300px;
    width: 250px;
    object-fit: cover;
    border-radius: 10px;
  }
`;
const Card = styled.div`
  height: 500px;
  width: 300px;
  margin-top: 20px;
`;

const CardHolder = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Line = styled.div`
  width: 170px;
  margin-top: 20px;
  border: 3px solid #d2b3e3;
  background-color: #d2b3e3;
  @media screen and (max-width: 360px) {
    width: 120px;
    margin-top: 20px;
    border: 3px solid #d2b3e3;
    background-color: #d2b3e3;
  }
`;

const Text = styled.div`
  font-size: 40px;
  @media screen and (max-width: 360px) {
    font-size: 30px;
  }
`;

const Wrapper = styled.div`
  height: 700px;
  flex-direction: column;
  width: 80vw;
  color: white;
  background-color: #1f1f1f;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    height: 1300px;
    flex-direction: column;
    width: 80vw;
    color: white;
    background-color: #1f1f1f;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 425px) {
    height: 1800px;
    flex-direction: column;
    width: 80vw;
    color: white;
    background-color: #1f1f1f;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Component = styled.div`
  height: 700px;
  width: 100vw;
  color: white;
  background-color: #1f1f1f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  @media screen and (max-width: 768px) {
    height: 1300px;
    width: 100vw;
    color: white;
    background-color: #1f1f1f;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: poppins;
  }
  @media screen and (max-width: 425px) {
    height: 1800px;
    width: 100vw;
    color: white;
    background-color: #1f1f1f;

    display: flex;
    justify-content: center;
    align-items: center;
    font-family: poppins;
  }
`;

export default Team;
