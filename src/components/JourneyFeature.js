import React, { useEffect, useState } from "react";
import "./JourneyFeature.css";

const JourneyFeature = ({ events, roadSignTitle }) => {
  const [carPosition, setCarPosition] = useState(-200); // Start hidden above the screen

  const eventConfig = {
    initialTop: 800, // Starting top position for the first event
    spacing: 800, // Vertical spacing between events
    horizontalOffset: 300, // Horizontal offset for alternating left and right
  };

  // Add dynamic position values to each event
  const positionedEvents = events.map((event, index) => {
    const isLeft = index % 2 === 0; // Alternate between left and right
    return {
      ...event,
      position: {
        top: `${eventConfig.initialTop + index * eventConfig.spacing}px`,
        left: `calc(50% - 150px ${isLeft ? "-" : "+"} ${eventConfig.horizontalOffset}px)`,
      },
    };
  });

  const totalRoadHeight =
    parseInt(positionedEvents[positionedEvents.length - 1].position.top, 10) + 400; // End road slightly past the last event

  // Set the car to the center of the screen immediately on load
  useEffect(() => {
    const centerPosition = window.innerHeight / 2 - 80; // Center of the screen minus half car height
    setCarPosition(centerPosition); // Set car position to the center
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div
      className="road-container"
      style={{
        height: `${totalRoadHeight}px`, // Dynamic height matching the road and events
      }}
    >
      {/* Road Sign */}
      <div className="road-sign">
        <h1>{roadSignTitle}</h1>
      </div>

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
      {positionedEvents.map((event, index) => (
        <a
          key={index}
          href={event.href}
          target="_blank"
          rel="noopener noreferrer"
          className="journey-feature"
          style={{
            top: event.position.top,
            left: event.position.left,
          }}
        >
          <img
            src={event.type === "gas" ? "/gas-station.png" : "/bump.png"}
            alt={event.type}
            className="feature-image"
          />
        </a>
      ))}
    </div>
  );
};

export default JourneyFeature;
