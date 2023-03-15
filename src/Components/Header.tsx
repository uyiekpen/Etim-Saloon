import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { BsCart2, BsBagCheckFill, BsBagXFill } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";
import SideBar from "./SideBar";
import logo from "../assets/images/logo.png";

const Header: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleSwitch = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <LogoNav>
            <Logo src={logo} />
            <Navs>
              <NavLink to="/" style={{ textDecoration: "none", color: "#000" }}>
                <span>Home</span>
              </NavLink>
              <NavLink
                to="/about"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <span>About</span>
              </NavLink>
              <NavLink
                to="/pricing"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <span>pricing</span>
              </NavLink>

              <NavLink
                to="/shop"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <span>Shop</span>
              </NavLink>
              <NavLink
                to="/blog"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <span>Blog</span>
              </NavLink>
              <NavLink
                to="/contact"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <span>Contact</span>
              </NavLink>
            </Navs>
          </LogoNav>
          <IconsHold>
            <span>
              <FiSearch />
            </span>
            <NavLink
              style={{
                textDecoration: "none",
              }}
              to="/cart"
            >
              <CartDiv>
                <BsCart2 />
                <Num>1 </Num>
              </CartDiv>
            </NavLink>
            <span>
              <MdOutlineAccountCircle />
            </span>
          </IconsHold>
          <MobNav onClick={toggleSwitch}>
            {toggle ? (
              <BsBagXFill size="20px" />
            ) : (
              <Hold>
                <BsBagCheckFill size="20px" />
                <Num> 1</Num>
              </Hold>
            )}
          </MobNav>
        </Wrapper>
      </Container>
      <SideTogg>{toggle ? <SideBar setToggle={setToggle} /> : null}</SideTogg>
    </>
  );
};

export default Header;

const SideTogg = styled.div``;
const Hold = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    width: 90%;
  }
`;
const LogoNav = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  height: 50px;
  width: 100%;
`;
const Navs = styled.div`
  margin-left: 50px;
  span {
    margin: 0 10px;
    font-size: 13px;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const IconsHold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    margin: 0 7px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const MobNav = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Num = styled.div`
  height: 18px;
  width: 18px;
  background-color: darkorange;
  font-size: 10px;
  /* padding: 2px; */
  border-radius: 50%;
  font-weight: bold;
  color: #fff;
  margin-top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartDiv = styled.div`
  display: flex;
  margin-top: -5px;
`;
