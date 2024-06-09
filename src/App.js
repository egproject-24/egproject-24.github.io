
import './App.css';
import VideoPlayer from './VideoPlayer.js';
import React, { useState } from 'react';
import exitIcon from './exit-icon.png';
import kamwerks from './kamwerks-logo.jpeg';
import battery from "./battery-icon.png";
import thumbnail1 from "./thumbnail.jpeg"

const App = () => {
  const [showCams, setShowCams] = useState(true);
  const [source, setSource] = useState("https://www.youtube.com/embed/K1N5GB37hgM?si=sRAiHI2ZxhXeAuJf");

  let width = "1200";
  let height = "675";

  
  const toggleVideo = (props) => {
    setShowCams(!showCams);
    if (props.source) {
      setSource(props.source);
    }
  }

  return (
    showCams ? <div>
      <body>
        <div className="battery">
          <img src={battery} className="battery"/>
          <text className="cameralife">400 min</text>
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
      <img className="exit-icon" width="75px" src={exitIcon} onClick={toggleVideo}/>
      <VideoPlayer width={width} height={height} source={source}/>
    </div>
  );
}

export default App;
