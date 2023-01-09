import React, { useState } from "react";
import styled from "styled-components";
import data from "../assets/data/serviceData";
import Pix from "../assets/images/5.jpg";

const Prices = () => {
  const [hairStyling, sethairStyling] = useState(false);

  const [HairTreatment, setHairTreatment] = useState(false);

  const [HairTreatment2, setHairTreatment2] = useState(false);

  const [HairTreatment3, setHairTreatment3] = useState(false);

  const onHairStyling = () => {
    sethairStyling(true);
    setHairTreatment(false);
    setHairTreatment2(false);
    setHairTreatment3(false);
  };

  const onHairTreatment = () => {
    sethairStyling(false);
    setHairTreatment(true);
    setHairTreatment2(false);
    setHairTreatment3(false);
  };

  const onHairTreatment2 = () => {
    sethairStyling(false);
    setHairTreatment(false);
    setHairTreatment2(true);
    setHairTreatment3(false);
  };

  const onHairTreatment3 = () => {
    sethairStyling(false);
    setHairTreatment(false);
    setHairTreatment2(false);
    setHairTreatment3(true);
  };

  return (
    <Container>
      <BgImage src={Pix} />

      <Wrapper>
        <TableHolder>
          <Table>
            <tbody>
              <tr>
                <th onClick={onHairStyling}>HAIRSTYLING</th>
                <th onClick={onHairTreatment}>HAIR TREATMENT</th>
                <th onClick={onHairTreatment2}>HAIR SERVICES</th>
                <th onClick={onHairTreatment3}>NAILS</th>
              </tr>
            </tbody>
          </Table>
        </TableHolder>
        {hairStyling ? (
          <ContentHolder>
            <div>
              <hr />

              {data?.map((props) => (
                <div>
                  <Holder>
                    <Div1>
                      <Text>{props.title}</Text>
                      <div>{props.other}</div>
                    </Div1>
                    <Div2>{props.Price}</Div2>
                    <BookButton>
                      <button>Book now</button>
                    </BookButton>
                  </Holder>
                  <hr />
                </div>
              ))}
            </div>
          </ContentHolder>
        ) : HairTreatment ? (
          <ContentHolder>hello2</ContentHolder>
        ) : HairTreatment2 ? (
          <ContentHolder>hello3</ContentHolder>
        ) : HairTreatment3 ? (
          <ContentHolder>hello4</ContentHolder>
        ) : null}
      </Wrapper>
    </Container>
  );
};

const BgImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const BookButton = styled.div`
  button {
    height: 50px;
    width: 100px;
    font-size: 15px;
    font-weight: bold;
    background-color: white;
    color: #7418a6;
    border: 3px solid #7418a6;
    margin-top: 20px;
  }
  @media screen and (max-width: 600px) {
    height: 120px;
    button {
      height: 50px;
      width: 90px;
      font-size: 12px;
      font-weight: bold;
      background-color: white;
      color: #7418a6;
      border: 3px solid #7418a6;
      margin-top: 20px;
    }
  }
`;

const Text = styled.div`
  font-weight: bolder;
  font-size: 15px;
  color: black;
  @media screen and (max-width: 600px) {
    font-size: 12px;
    margin-top: 10px;
  }
`;

const Div2 = styled.td`
  width: 50%;
  font-weight: bolder;
  font-size: 15px;
  color: black;
  padding-left: 20px;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const Div1 = styled.tr`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 90px;
  text-transform: capitalize;
  @media screen and (max-width: 600px) {
    height: 150px;

    div {
      font-size: 12px;
    }
  }
`;

const Holder = styled.div`
  display: flex;
`;

const ContentHolder = styled.div`
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  height: 100px;
  text-align: center;
  tr {
  }
  th {
    border: 1px solid black;

    transition: all 350ms;
    width: 100px;
    :hover {
      cursor: pointer;
      transform: scale(1.02);
      cursor: pointer;
      background-color: rgba(116, 46, 157, 0.9);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 70px;
    text-align: center;
    tr {
    }
    th {
      border: 1px solid black;
      font-size: 10px;

      transition: all 350ms;
      width: 100px;
      :hover {
        cursor: pointer;
        transform: scale(1.02);
        cursor: pointer;
        background-color: rgba(116, 46, 157, 0.9);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
    }
  }
`;

const TableHolder = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 80vw;
  margin-top: 20px;
  @media screen and (max-width: 600px) {
    width: 90vw;
    margin-top: 20px;
  }
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  flex-direction: column;
`;
export default Prices;
