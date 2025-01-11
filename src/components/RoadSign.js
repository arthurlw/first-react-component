import React from "react";
import "./RoadSign.css";

const RoadSign = ({ title }) => {
  // Calculate width based on the title length (add a base width and increase based on title length)
  const baseWidth = 100; // Minimum width for short titles
  const extraWidthPerChar = 10; // Additional width per character
  const calculatedWidth = baseWidth + title.length * extraWidthPerChar;

  return (
    <div
      className="road-sign"
      style={{ width: `${calculatedWidth}px` }}
    >
      <img
        src="/road-sign.png"
        alt="Road Sign"
        className="road-sign-image"
      />
      <span className="road-sign-title">{title}</span>
    </div>
  );
};

export default RoadSign;