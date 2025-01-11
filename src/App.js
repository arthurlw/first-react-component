import React, { useEffect, useState } from "react";
import JourneyFeature from "./components/JourneyFeature";
import "./App.css";

const App = () => {
  const [carPosition, setCarPosition] = useState(-200); // Start hidden above the screen

  const events = [
    { type: "gas", position: { top: "800px", left: "calc(50% - 100px)" }, href: "https://example.com" },
    { type: "bump", position: { top: "1600px", left: "calc(50% + 100px)" }, href: "https://example2.com" },
    { type: "gas", position: { top: "2400px", left: "calc(50% - 100px)" }, href: "https://example3.com" },
  ];

  const totalRoadHeight = parseInt(events[events.length - 1].position.top, 10) + 400; // End road slightly past the last event

  // Set the car to the center of the screen immediately on load
  useEffect(() => {
    const centerPosition = window.innerHeight / 2 - 30; // Center of the screen minus half car height
    setCarPosition(centerPosition); // Set car position to the center
  }, []); // Empty dependency array ensures this runs only once

  // Scroll handler to lock car position in center
  useEffect(() => {
    const handleScroll = () => {
      const centerPosition = window.innerHeight / 2 - 30; // Center of the screen minus half car height
      setCarPosition(centerPosition); // Keep car fixed in the center
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="road-container"
      style={{
        height: `${totalRoadHeight}px`, // Dynamic height matching the road and events
      }}
    >
      {/* Road */}
      {Array(Math.ceil(totalRoadHeight / 150))
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
        style={{
          top: `${carPosition}px`, // Immediate positioning to center
        }}
      />

      {/* Journey Features */}
      {events.map((event, index) => (
        <JourneyFeature key={index} {...event} />
      ))}
    </div>
  );
};

export default App;
