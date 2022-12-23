import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const footer = () => {
  return (
    <footer>
      <div className="Foot-Wrapper">
        <div className="FooterLogo">
          <h3>Etims Saloon</h3>
          <p>
            Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas.
            Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet,
            massa fringilla leo orci.
          </p>
        </div>

        <div className="FooterLogo">
          <h3>Additional Links</h3>
          <p>About</p>
          <p>shop</p>
          <p>services</p>
          <p>contact</p>
          <p>blog</p>
        </div>
        <div className="FooterLogo">
          <h3>Policies</h3>
          <p>Delivery and shipping</p>
          <p>Refund and exchange</p>
          <p>Terms and conditions</p>
          <p>Privacy and policy</p>
        </div>
        <div className="FooterLogo">
          <h3>follow us</h3>
          <div className="Icon">
            <span>
              <WhatsAppIcon />
            </span>
            <a> whatsapp</a>
          </div>
          <div className="Icon">
            <span>
              <FacebookIcon />
            </span>
            <a> facebook</a>{" "}
          </div>
          <div className="Icon">
            <span>
              <InstagramIcon />
            </span>
            <a> instagram</a>{" "}
          </div>
          <div className="Icon">
            <span>
              <LinkedInIcon />
            </span>
            <a> Linkedin</a>{" "}
          </div>
        </div>
      </div>
      <div className="Tittle">
        © Copyright {new Date().getFullYear()} – Developed by Osas
      </div>
    </footer>
  );
};

export default footer;
