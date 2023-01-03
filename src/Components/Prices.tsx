import React from "react";
import styled from "styled-components";

const Prices = () => {
  return (
    <Container>
      <Wrapper>
        <TableHolder>
          <Table>
            <tr>
              <th>HAIRSTYLING</th>
              <th>HAIR TREATMENT</th>
              <th>HAIR SERVICES</th>
              <th>NAILS</th>
            </tr>
          </Table>
        </TableHolder>
      </Wrapper>
    </Container>
  );
};
const Table = styled.table`
  width: 100%;
  height: 100px;
  text-align: center;

  tr {
  }
  th {
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
`;

const TableHolder = styled.div`
  height: 400px;
  width: 100%;
`;

const Wrapper = styled.div`
  height: 500px;
  width: 90vw;
`;

const Container = styled.div`
  height: 500px;
  width: 100vw;
  margin-top: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Prices;
