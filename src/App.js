import React, { useEffect, useState } from "react";
import "./App.css";

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

const App = () => {
  const [carPosition, setCarPosition] = useState(-100); // Start hidden above the screen

  // Scroll handler to move the car
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const centerThreshold = 200; // Distance where the car locks at the center
      if (scrollY <= centerThreshold) {
        setCarPosition(scrollY - 100); // Adjust position as the user scrolls
      } else {
        setCarPosition(centerThreshold - 100); // Lock the car in the center
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="road-container">
      {/* Road */}
      {Array(20)
        .fill(0)
        .map((_, index) => (
          <img
            key={index}
            src="/road.png"
            alt="road"
            className="road-image"
            style={{ top: `${index * 150}px` }}
          />
        ))}

      {/* Car */}
      <img
        src="/car.png"
        alt="car"
        className="car-image"
        style={{ top: `${carPosition}px` }}
      />

      {/* Journey Features */}
      <JourneyFeature
        type="gas"
        position={{ top: "400px", left: "calc(50% - 100px)" }}
        href="https://example.com"
      />
      <JourneyFeature
        type="bump"
        position={{ top: "900px", left: "calc(50% + 100px)" }}
        href="https://example2.com"
      />
      <JourneyFeature
        type="gas"
        position={{ top: "1400px", left: "calc(50% - 100px)" }}
        href="https://example3.com"
      />
    </div>
  );
};

export default App;
