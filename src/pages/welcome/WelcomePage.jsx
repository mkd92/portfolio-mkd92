import React from "react";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import "./WelcomePage.css";

function WelcomePage() {
  return (
    <div className="welcome__hero">
      <ul className="left">
        <li className="top">
          <div className="hi">Hi!</div>
          <div className="post">Fullstack Developer</div>
        </li>
        <li className="name">
          <span className="iam">I am</span> Manikandan
        </li>
      </ul>
      <div className="right">
        <img src="../../assets/Imagemkd.png" alt="" srcset="" />
        <div className="image-bg"></div>
      </div>
    </div>
  );
}

export default WelcomePage;
