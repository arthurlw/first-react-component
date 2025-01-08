import React from "react";

const JourneyFeature = ({ type, position, href }) => {
  const featureImages = {
    gas: "/gas.png",
    bump: "/bump.png",
  };

  return (
    <div
      className="journey-feature"
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      <img src={featureImages[type]} alt={type} className="feature-image" />
      <a href={href} className="feature-box" target="_blank" rel="noreferrer">
        {type.toUpperCase()}
      </a>
    </div>
  );
};

export default JourneyFeature;
