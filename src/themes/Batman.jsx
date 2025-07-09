import "./Batman.css"

const Batman = () => {
  return (
    <div className="theme-background batman-theme">
      <div className="gotham-sky"></div>
      <div className="gotham-moon"></div>
      <div className="bat-signal">
        {/* Bat logo SVG from user attachment */}
        <svg className="bat-logo-svg" viewBox="0 0 267 160" width="80" height="48" fill="black" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(180deg)'}} aria-hidden="true">
          <path d="M0 120 Q 30 100 60 120 Q 80 80 120 100 Q 110 60 133 40 Q 156 60 147 100 Q 187 80 207 120 Q 237 100 267 120 Q 220 60 180 60 Q 170 30 133 0 Q 96 30 87 60 Q 47 60 0 120 Z" />
        </svg>
      </div>
      <div className="gotham-buildings">
        <div className="building building-1"></div>
        <div className="building building-2"></div>
        <div className="building building-3"></div>
        <div className="building building-4"></div>
        <div className="building building-5"></div>
      </div>
      <div className="flying-bats">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`bat bat-${i}`}>
            🦇
          </div>
        ))}
      </div>
      <div className="gotham-fog"></div>
      <div className="window-lights">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`window-light light-${i}`}></div>
        ))}
      </div>
      <div className="batman-title">BATMAN</div>
    </div>
  )
}

export default Batman
