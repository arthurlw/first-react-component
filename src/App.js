import React, { useEffect, useState } from "react";
import JourneyFeature from "./components/JourneyFeature"; // Importing the feature component
import "./App.css";

const App = () => {
  const [carPosition, setCarPosition] = useState(0);

  const journeyFeatures = [
    { type: "gas", href: "https://example.com" },
    { type: "bump", href: "https://example2.com" },
    { type: "gas", href: "https://example3.com" },
    { type: "bump", href: "https://example4.com" },
  ];

  // Scroll handler to move the car
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const centerThreshold = 200; // Adjust this threshold
      if (scrollY <= centerThreshold) {
        setCarPosition(scrollY); // Move car up to the center
      } else {
        setCarPosition(centerThreshold); // Lock car in center
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="road-container">
      {/* Road */}
      <div className="road-wrapper">
        {Array(50) // Create a long road by repeating the road image
          .fill(0)
          .map((_, index) => (
            <img
              key={index}
              src="/road.png"
              alt="road"
              className="road-image"
              style={{ top: `${index * 500}px` }} // Position each segment
            />
          ))}
      </div>

      {/* Car */}
      <img
        src="/car.png"
        alt="car"
        className="car-image"
        style={{ top: `${carPosition}px` }}
      />

      {/* Journey Features */}
      {journeyFeatures.map((feature, index) => (
        <JourneyFeature
          key={index}
          type={feature.type}
          href={feature.href}
          position={{
            top: `${index * 700}px`, // Space features equally
            left: index % 2 === 0 ? "20px" : "calc(100% - 100px)", // Alternate left and right
          }}
        />
      ))}
    </div>
  );
};

export default App;
