import React from "react";
import "./RoadSign.css";

const RoadSign = ({ title }) => {
  const baseWidth = 100; // Minimum width for short titles
  const extraWidthPerChar = 10; // Additional width per character
  const calculatedWidth = baseWidth + title.length * extraWidthPerChar;

  return (
    <div
      className="road-sign"
      style={{ width: `${calculatedWidth}px` }}
    >
      <span className="road-sign-title">{title}</span>
    </div>
  );
};

export default RoadSign;
