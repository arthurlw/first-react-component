import React, { useEffect, useState } from "react";
import JourneyFeature from "./components/JourneyFeature";
import "./App.css";

const App = () => {
  const [carPosition, setCarPosition] = useState(-200); // Start hidden above the screen
  const [scrollStarted, setScrollStarted] = useState(false); // Track if scrolling has started

  const events = [
    { type: "gas", position: { top: "800px", left: "calc(50% - 100px)" }, href: "https://example.com" },
    { type: "bump", position: { top: "1600px", left: "calc(50% + 100px)" }, href: "https://example2.com" },
    { type: "gas", position: { top: "2400px", left: "calc(50% - 100px)" }, href: "https://example3.com" },
  ];

  const totalRoadHeight = parseInt(events[events.length - 1].position.top, 10) + 400; // End road slightly past the last event

  // Scroll handler to move the car
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const centerPosition = window.innerHeight / 2 - 30; // Center of the screen minus half car height

      if (!scrollStarted) {
        setScrollStarted(true); // Start animating when scrolling begins
      }

      if (scrollY <= centerPosition) {
        setCarPosition(scrollY - 200); // Adjust position until car reaches center
      } else {
        setCarPosition(centerPosition); // Lock car in center (fixed calculation)
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollStarted]);

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
        className={`car-image ${scrollStarted ? "animate-car" : ""}`}
        style={{
          top: `${scrollStarted ? carPosition : -200}px`, // Fix the teleport issue
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
