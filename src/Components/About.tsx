import React from "react";
import styled from "styled-components";

const Team = () => {
  return (
    <Component>
      <Wrapper>
        <Text>About Us</Text>
        <Line />
        <Div>
          At Earthe Natural hair Saloon, our mission is to provide proven
          solution for hair loss for African women, restore their hair
          confidence and reduce the risk of cancer associated hair chemical
          usage among us. The goal is to foster acceptance of our natural kinky
          coils, channel the right care to grow it longer and healthier .
        </Div>
      </Wrapper>
    </Component>
  );
};

const Div = styled.div`
  margin-top: 20px;
`;

const Line = styled.div`
  width: 170px;
  margin-top: 10px;
  border: 3px solid #d2b3e3;
  background-color: #d2b3e3;
`;

const Text = styled.div`
  font-size: 40px;
  @media screen and (max-width: 360px) {
    font-size: 30px;
  }
`;

const Wrapper = styled.div`
  height: 350px;
  flex-direction: column;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Component = styled.div`
  height: 350px;
  width: 100vw;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
`;

export default Team;
