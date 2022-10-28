import "./Header.css";
import React from "react";

function Header() {
  return (
    <div className="header flex justify-between items-center">
      <div className="logo justify-center p-2">Mkd-92</div>
      <ul className="header__links flex justify-between items-center w-1/4">
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Header;
