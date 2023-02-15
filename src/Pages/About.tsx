import React from "react";
import styled from "styled-components";
import img from "../assets/images/1.jpg";

const About = () => {
  return (
    <Container>
      <Wrapper>
        <Div>
          <h2>About Earthy'es Saloon</h2>
        </Div>
        <MainDiv>
          <ImageHolder>
            <img src={img} alt="" />
          </ImageHolder>
          <TextHolder>
            <Tesxt>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et during
              the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
              sit amet..", comes from a line in section 1.10.32. The standard
              chunk of Lorem
            </Tesxt>
          </TextHolder>
        </MainDiv>
      </Wrapper>
    </Container>
  );
};

const Tesxt = styled.div`
  font-size: 14px;
  @media screen and (max-width: 760px) {
    font-size: 13px;
  }
`;
const TextHolder = styled.div`
  width: 50%;
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;
const ImageHolder = styled.div`
  width: 50%;
  height: 400px;

  img {
    width: 80%;
    height: 400px;
    object-fit: cover;
    border-radius: 20px;
  }
  @media screen and (max-width: 760px) {
    width: 100%;
    height: 300px;

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 20px;
    }
  }
`;
const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  height: 500px;
  width: 100%;
  @media screen and (max-width: 760px) {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    height: 650px;
    width: 100%;
    flex-direction: column;
  }
`;
const Div = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export default About;
