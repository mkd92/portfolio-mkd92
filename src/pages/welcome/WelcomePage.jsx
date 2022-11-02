import React from "react";
import { motion as m } from "framer-motion";

import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import "./WelcomePage.css";
import { cubicBezier } from "./../../../node_modules/@motionone/easing/lib/cubic-bezier";

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
        <img src="../../assets/Imagemkd.png" alt="" />
        <m.div
          animate={{
            scale: [1, 1.5, 1.5, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{ type: "spring", duration: 20, repeat: Infinity }}
          className="image-bg"
        ></m.div>
      </div>
    </div>
  );
}

export default WelcomePage;
