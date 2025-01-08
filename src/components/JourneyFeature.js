import React from "react";

const JourneyFeature = ({ type, position, href }) => {
  const featureImages = {
    gas: "/gas.png",
    bump: "/bump.png",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="journey-feature"
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      <img src={featureImages[type]} alt={type} className="feature-image" />
    </a>
  );
};

export default JourneyFeature;
