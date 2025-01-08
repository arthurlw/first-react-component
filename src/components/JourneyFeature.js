import React from "react";

const JourneyFeature = ({ type, position, href }) => {
  const featureImages = {
    gas: "/gas-station.png",
    bump: "/bump.png",
  };

  return (
    <div className="feature" style={{ ...position }}>
      <img src={featureImages[type]} alt={type} className="feature-image" />
      <div className="feature-box">
        <a href={href} target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default JourneyFeature;
