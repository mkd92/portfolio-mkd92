import React, { useEffect, useRef, useState } from "react";
import { motion as m } from "framer-motion";
import images from "../../helpers/imageImport.js";
import "./PortfolioPage.css";
import { ScrollOffset } from "./../../../node_modules/@motionone/dom/lib/gestures/scroll/offsets/presets";
import { scroll } from "./../../../node_modules/@motionone/dom/lib/gestures/scroll/index";
function PortfolioPage() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="portfolio__page">
      <m.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <m.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((image, i) => (
            <m.div className="item" key={i}>
              <button
                onClick={() =>
                  window.open(image.url, "_blank", "noopener,noreferrer")
                }
              >
                <img src={image.src} alt="" />
              </button>
            </m.div>
          ))}
        </m.div>
      </m.div>
    </div>
  );
}

export default PortfolioPage;
