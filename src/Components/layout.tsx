import React from "react";
import Header from "./Header";
import Footer from "./footer";
import Router from "../Router/Router";

const layout = () => {
  return (
    <>
      <Header />
      <div>
        <Router />
      </div>
      <Footer />
    </>
  );
};

export default layout;
