import React from "react";
import JourneyFeature from "./components/JourneyFeature";

const App = () => {
  const events = [
    { type: "gas", href: "https://example.com" },
    { type: "bump", href: "https://special-event.com" },
    { type: "gas", href: "https://example2.com" },
    { type: "bump", href: "https://example3.com" },
    { type: "gas", href: "https://another-special.com" },
  ];

  return (
    <div>
      <JourneyFeature events={events} roadSignTitle="Road to 1000 Github Contributions" />
    </div>
  );
};

export default App;
