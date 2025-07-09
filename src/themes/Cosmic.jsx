import React from "react";
import "./Cosmic.css";

const Cosmic = () => {
  return (
    <div className="alien-planet-container">
      <div className="sky">
        <div className="stars-field">
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className={`star star-${i}`}></div>
          ))}
        </div>
        <div className="planet-ring"></div>
        <div className="planet"></div>
        <div className="moon moon1"></div>
        <div className="moon moon2"></div>
      </div>
      <div className="terrain"></div>
    </div>
  );
};

export default Cosmic;
