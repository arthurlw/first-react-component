import React, { useEffect, useState } from "react";
import JourneyFeature from './components/JourneyFeature';
import "./App.css";

const App = () => {
  const [carPosition, setCarPosition] = useState(0);

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
      <img
        src="/road.png"
        alt="road"
        className="road-image"
      />
      <img
        src="/car.png"
        alt="car"
        className="car-image"
        style={{ top: `${carPosition}px` }}
      />
      {/* Example Journey Features */}
      <JourneyFeature
        type="gas"
        position={{ top: "500px", left: "50px" }}
        href="https://example.com"
      />
      <JourneyFeature
        type="bump"
        position={{ top: "1000px", left: "200px" }}
        href="https://example2.com"
      />
      <JourneyFeature
        type="gas"
        position={{ top: "2000px", left: "300px" }}
        href="https://example2.com"
      />
    </div>
  );
};

export default App;
