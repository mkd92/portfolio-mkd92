import Header from "../header/Header";
import Footer from "../footer/Footer";
import Transition from "../transition/Transition";

import "./Layout.css";
import React from "react";

function Layout({ children }) {
  return (
    <div className=" layout flex flex-col justify-between content-center">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
