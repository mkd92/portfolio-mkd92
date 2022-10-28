import Header from "../header/Header";
import "./Layout.css";
import React from "react";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
