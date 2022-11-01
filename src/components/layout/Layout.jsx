import Header from "../header/Header";
import Footer from "../footer/Footer";
import Transition from "../transition/Transition";

import "./Layout.css";
import React from "react";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
