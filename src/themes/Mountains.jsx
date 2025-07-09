import "./Mountains.css"


const Mountains = () => {
  return (
    <div className="theme-background mountains-theme">
      <div className="mountains-bg"></div>
      <div className="mountains-layer mountains-layer-back"></div>
      <div className="mountains-layer mountains-layer-mid"></div>
      <div className="mountains-layer mountains-layer-front"></div>
      <div className="mountains-trees"></div>
      <div className="mountains-bushes"></div>
      <div className="mountains-rocks"></div>
      <div className="mountains-foreground"></div>
      <div className="mountains-clouds">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
      </div>
      <div className="mountains-birds">
        <div className="bird bird-1"></div>
        <div className="bird bird-2"></div>
        <div className="bird bird-3"></div>
      </div>
      <div className="mountains-bear">
        <div className="bear-body">
          <div className="bear-head"></div>
          <div className="bear-ear bear-ear-left"></div>
          <div className="bear-ear bear-ear-right"></div>
          <div className="bear-arm bear-arm-left"></div>
          <div className="bear-arm bear-arm-right"></div>
          <div className="bear-leg bear-leg-left"></div>
          <div className="bear-leg bear-leg-right"></div>
        </div>
      </div>
    </div>
  )
}

export default Mountains
