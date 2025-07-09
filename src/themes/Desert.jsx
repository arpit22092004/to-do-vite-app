import "./Desert.css"

const Desert = () => {
  return (
    <div className="theme-background desert-theme">
      <div className="desert-sky"></div>
      <div className="desert-sun"></div>
      <div className="desert-mesas">
        <div className="mesa mesa-1"></div>
        <div className="mesa mesa-2"></div>
        <div className="mesa mesa-3"></div>
      </div>
      <div className="desert-dunes">
        <div className="dune dune-1"></div>
        <div className="dune dune-2"></div>
        <div className="dune dune-3"></div>
        <div className="dune dune-4"></div>
      </div>
      <div className="desert-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`sand-particle particle-${i}`}></div>
        ))}
      </div>
      <div className="desert-cacti">
        <div className="cactus cactus-1"></div>
        <div className="cactus cactus-2"></div>
        <div className="cactus cactus-3"></div>
      </div>
      <div className="desert-grass desert-grass-1"></div>
      <div className="desert-grass desert-grass-2"></div>
    </div>
  )
}

export default Desert
