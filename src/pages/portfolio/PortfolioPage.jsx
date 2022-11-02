import React, { useState } from "react";
import { v4 } from "uuid";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import imageImport from "../../helpers/imageImport";
import "./PortfolioPage.css";

function PortfolioPage() {
  const [active, setActive] = useState(0);
  const length = imageImport.length;
  const nextSlide = () => {
    setActive(active === length - 1 ? 0 : active + 1);
  };
  const prevSlide = () => {
    setActive(active === 0 ? length - 1 : active - 1);
  };
  if (!Array.isArray(imageImport) || length <= 0) {
    return null;
  }
  const openWindow = (url) => {
    window.open(url, "_blank");
  };
  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {imageImport.map((image, index) => {
        return (
          <div
            className={index === active ? "slide active" : "slide"}
            key={v4()}
          >
            {index === active && (
              <>
                <img
                  src={image.src}
                  className="image"
                  onClick={() => openWindow(image.url)}
                />{" "}
                <span className="text-xl font-semibold uppercase">
                  {image.name}
                </span>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default PortfolioPage;
