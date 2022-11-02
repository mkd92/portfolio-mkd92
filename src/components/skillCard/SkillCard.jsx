import React, { useEffect, useState } from "react";
import {
  CircularProgressbar,
  buildStyles,
} from "../../../node_modules/react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./SkillCard.css";
function Skillcard({ pValue, name }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(pValue);
  }, [pValue]);
  return (
    <button className="skillCard   w-52 h-52 flex justify-center content-center">
      <CircularProgressbar
        className="h-auto w-auto uppercase m-0"
        background
        backgroundPadding={6}
        value={progress}
        styles={buildStyles({
          textColor: "#003249",
          pathColor: "#007ea7",
          backgroundColor: "#9ad1d4",
          pathTransition: "all 3s",
          textSize: "15px",
        })}
        text={name}
      />
    </button>
  );
}

export default Skillcard;
