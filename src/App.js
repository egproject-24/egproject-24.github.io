
import './App.css';
import VideoPlayer from './VideoPlayer.js';
import React, { useState } from 'react';
import exitIcon from './icons/exit-icon.png';
import kamwerks from './icons/kamwerks-logo.jpeg';
import battery from "./icons/battery-icon.png";

const App = () => {
  const [showCams, setShowCams] = useState(true);
  const [source, setSource] = useState("https://www.youtube.com/embed/K1N5GB37hgM?si=sRAiHI2ZxhXeAuJf");
  const [batteryLife, setBatteryLife] = useState(400);

  let width = "1000";
  let height = "563";

  
  const toggleVideo = (props) => {
    setShowCams(!showCams);
    if (props.source) {
      setSource(props.source);
    }
    setBatteryLife(batteryLife - Math.floor(Math.random(0,5)*5));
  }

  return (
    showCams ? <div>
      <body>
        <div className="battery">
          <img src={battery} className="battery"/>
            <text className="cameralife">{batteryLife} min</text>
          </div>
        <div className="container">
          <div class="box" data-date="09/15" id="video-box-1" onClick={toggleVideo}/>
          <div class="box" data-date="09/15"/>
          <div class="box" data-date="10/02"/>
          <div class="box" data-date="10/03"/>
          <div class="box" data-date="<ERROR>"/>
          <div class="box" data-date="10/03"/>
          <div class="box" data-date="10/03"/>
          <div class="box" data-date="10/10"/>
        </div>
        <img src={kamwerks} className="kamwerks"/>
      </body>
    </div> 
    :
    <div>
      <div className="battery">
          <img src={battery} className="battery"/>
            <text className="cameralife">{batteryLife} min</text>
          </div>
      <img className="exit-icon" width="75px" src={exitIcon} onClick={toggleVideo}/>
      <VideoPlayer width={width} height={height} source={source}/>
    </div>
  );
}

export default App;
