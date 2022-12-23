import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListIcon from "@mui/icons-material/List";
import "./comp.css";

const Header = () => {
  return (
    <div className="Component">
      <div className="Wrapper">
        <div className="Logo_Button">
          <div className="Logo">Etim-Saloon</div>
        </div>
        <div className="Nav-Menu">
          <div className="Nav">Home</div>
          <div className="Nav">Shop</div>
          <div className="Nav">Services</div>

          <div className="Nav">Product</div>
          <div className="Nav">Contact Us</div>
        </div>
        <div className="Btn">
          <button>Book now</button>
          <span>
            <ShoppingCartIcon />
          </span>
        </div>
        <div className="Mobile-menu">
          <span>
            <ListIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
