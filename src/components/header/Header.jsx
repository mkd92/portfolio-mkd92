import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LinkedIn from "@mui/icons-material/LinkedIn.js";
import { Link } from "react-router-dom";

import "./Header.css";
import React from "react";

function Header() {
  return (
    <div className="header flex items-center p-4 rounded-lg   font-semibold">
      <div className="logo justify-start p-2 mr-auto flex-1">
        <Link to="/">
          <img src="../../assets/logo-day.svg" className="logo" alt="" />
        </Link>
      </div>
      <ul className="header__links flex justify-center items-center flex-1">
        <li className="m-2 px-2">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="m-2 px-2">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="m-2 px-2">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="m-2 px-2">
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="header__social flex ml-auto justify-end  flex-1">
        <a
          className="mx-2 button__hover"
          href="https://www.instagram.com/manikandan1116/"
        >
          <InstagramIcon />
        </a>
        <a className="mx-2 button__hover" href="https://github.com/mkd92">
          <GitHubIcon />
        </a>
        <a className="mx-2 button__hover" href="https://twitter.com/mkd92_">
          <TwitterIcon />
        </a>
        <a
          className="mx-2 button__hover"
          href="https://www.linkedin.com/in/manikandan-mariappan-1116y/"
        >
          <LinkedIn />
        </a>
        <button className="mx-2 button__hover">
          <BedtimeIcon />
        </button>
      </div>
    </div>
  );
}

export default Header;
