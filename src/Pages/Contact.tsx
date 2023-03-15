import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Component>
      <TextHolder>
        <Div />
        <Text>Contact Us</Text>
        <Div />
      </TextHolder>
      <Wrapper>
        <CardHolder>
          <Card>
            <h3>Get in Touch</h3>
            <Div2 />
            <Address>51 Irowa Obazee St, Uselu, Benin City, Nigeria</Address>
            <Phone>+234 815 343 5584</Phone>
          </Card>
          <Form>
            <InputHolder>
              <Input placeholder="first Name" />
              <Input placeholder="last Name" />{" "}
            </InputHolder>
            <InputHolder>
              <Input placeholder="Email Address" />{" "}
              <Input placeholder="Phone" />
            </InputHolder>
            <Message placeholder="Message" />
            <Button>Send Message</Button>
          </Form>
        </CardHolder>
      </Wrapper>
    </Component>
  );
};
const Button = styled.button`
  width: 680px;
  height: 50px;
  margin-top: 20px;
  border-radius: 8px;
  background: #000;
  color: white;
  text-transform: capitalize;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    width: 430px;
    height: 50px;
    margin-top: 20px;
    border-radius: 8px;
    background: #000;
    color: white;
    text-transform: capitalize;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 50px;
    margin-top: 20px;
    border-radius: 8px;
    background: #000;
    color: white;
    text-transform: capitalize;
  }
`;
const Message = styled.input`
  width: 680px;
  height: 200px;
  margin-top: 10px;
  padding: 20px;
  border-radius: 8px;
  border: none;
  outline: none;
  background: whitesmoke;
  text-transform: capitalize;
  @media screen and (max-width: 768px) {
    width: 430px;
    height: 200px;
    margin-top: 10px;
    padding: 20px;
    border-radius: 8px;
    border: none;
    outline: none;
    background: whitesmoke;
    text-transform: capitalize;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 200px;
    margin-top: 10px;
    border-radius: 8px;
    padding: 20px;
    border: none;
    outline: none;
    background: whitesmoke;
    text-transform: capitalize;
  }
`;

const Input = styled.input`
  width: 330px;
  height: 50px;
  margin-top: 10px;
  border-radius: 8px;
  padding: 20px;
  border: none;
  outline: none;
  background: whitesmoke;
  text-transform: capitalize;
  @media screen and (max-width: 768px) {
    width: 210px;
    height: 50px;
    margin-top: 10px;
    border-radius: 8px;
    padding: 20px;
    border: none;
    outline: none;
    background: whitesmoke;
    text-transform: capitalize;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 50px;
    margin-top: 10px;
    border-radius: 8px;
    padding: 20px;
    border: none;
    outline: none;
    background: whitesmoke;
    text-transform: capitalize;
  }
`;
const InputHolder = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Form = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    height: 600px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Phone = styled.div`
  margin-top: 20px;
  font-weight: 500;
  @media screen and (max-width: 768px) {
  }
`;

const Address = styled.div`
  margin-top: 20px;
  font-weight: 500;
  @media screen and (max-width: 768px) {
  }
`;

const Card = styled.div`
  width: 30%;
  height: 400px;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h3 {
      width: 100%;

      text-align: center;
    }
  }
`;
const Div2 = styled.div`
  width: 100px;
  border: 1px solid black;
  @media screen and (max-width: 768px) {
  }
`;
const CardHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 500px) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 50px;
  @media screen and (max-width: 768px) {
    font-weight: 500;
    font-size: 30px;
  }
  @media screen and (max-width: 500px) {
    font-weight: 500;
    font-size: 25px;
  }
  @media screen and (max-width: 320px) {
    font-weight: 500;
    font-size: 20px;
  }
`;
const Div = styled.div`
  width: 400px;
  border: 2px solid white;
  @media screen and (max-width: 768px) {
    width: 250px;
    border: 2px solid white;
  }
  @media screen and (max-width: 500px) {
    width: 100px;
    border: 2px solid white;
  }
  @media screen and (max-width: 320px) {
    width: 80px;
    border: 2px solid white;
  }
`;
const TextHolder = styled.div`
  height: 200px;
  width: 100%;
  background-color: #282828;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  justify-content: space-evenly;
  @media screen and (max-width: 768px) {
    height: 200px;
    width: 100%;
    background-color: #282828;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    justify-content: space-evenly;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 90%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Component = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default Contact;
