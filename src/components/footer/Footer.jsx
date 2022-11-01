import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
function Footer() {
  return (
    <div className="footer__main w-full">
      <div className=" footer__links">
        <a className="mx-10 ">instagram</a>
        <a className="mx-10 ">twitter</a>
        <a className="mx-10 ">github</a>
        <a className="mx-10 ">linkedin</a>
        <div className="mx-10  h-12 w-12">
          <img src="../../assets/logo-night.svg" alt="" />
        </div>
        <Link to="/" className="mx-10 ">
          home
        </Link>
        <Link to="/portfolio" className="mx-10 ">
          portfolio
        </Link>
        <Link to="/skills" className="mx-10 ">
          skills
        </Link>
        <Link to="/contact" className="mx-10 ">
          contact
        </Link>
      </div>
    </div>
  );
}

export default Footer;
