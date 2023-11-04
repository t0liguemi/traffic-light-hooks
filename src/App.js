import './App.css';
import { useState } from 'react'


function App() {
  const [trafficLightState, setLightState] = useState(0) //Default on stop
  const [purpleHide, setPurpleState] = useState(true)

  return (
    <div className="App">
      <div className="mainContainer">
        <div className="trafficLightHolder"></div>
        <div className="trafficLightContainer">
          <div className={`redLightBulb ${trafficLightState === 0 ? "selected" : ""}`} onClick={() => setLightState(0)}></div>
          <div className={`yellowLightBulb ${trafficLightState === 1 ? "selected" : ""}`} onClick={() => setLightState(1)}></div>
          <div className={`greenLightBulb ${trafficLightState === 2 ? "selected" : ""}`} onClick={() => setLightState(2)}></div>
          <div className={`purpleLightBulb ${trafficLightState === 3 ? "selected" : ""} ${purpleHide === true ? "hideLight" : ""}`} onClick={() => setLightState(3)}></div>
        </div>
        <button className="nextLight" onClick={() => setLightState((trafficLightState + 1) % (purpleHide === true ? 3 : 4))}>Next Light</button>
        <button className="addLightButton" onClick={() => setPurpleState(false)}>Add an extra light</button>
      </div>
    </div >

  )
}

export default App;
