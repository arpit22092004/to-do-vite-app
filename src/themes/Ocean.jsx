
import React from "react";
import "./Ocean.css";


const Ocean = () => {
  return (
    <div className="ocean-container">
      <div className="sky">
        <div className="ocean-sun"></div>
        <div className="ocean-birds">
          <div className="bird bird-1"></div>
          <div className="bird bird-2"></div>
          <div className="bird bird-3"></div>
        </div>
      </div>
      <div className="clouds"></div>
      <div className="waves wave1"></div>
      <div className="waves wave2"></div>
      <div className="waves wave3"></div>
      <div className="beach"></div>
    </div>
  );
};

export default Ocean;
