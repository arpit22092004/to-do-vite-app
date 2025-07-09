
import React, { useMemo } from "react"
import "./Aurora.css"

const STAR_COUNT = 60

const Aurora = () => {
  // Interactive twinkle on click
  const handleStarClick = (e) => {
    e.target.classList.add("twinkle-boost")
    setTimeout(() => {
      e.target.classList.remove("twinkle-boost")
    }, 1000)
  }

  return (
    <div className="theme-background aurora-theme">
      <div className="aurora-sky-gradient"></div>
      <div className="aurora-lights-effect"></div>``
      <div className="aurora-mountains">
        <div className="mountain mountain-1"></div>
        <div className="mountain mountain-2"></div>
        <div className="mountain mountain-3"></div>
      </div>

      <div className="aurora-moon">
        <div className="full-moon"></div>
      </div>
      <div className="stars">
        {Array.from({ length: STAR_COUNT }).map((_, i) => (
          <div
            key={i}
            className={`star star-${i}`}
            tabIndex={0}
            onClick={handleStarClick}
            title="Click me!"
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Aurora
