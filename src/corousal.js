import React, { useState } from 'react';
import './corousal.css'; 
import img1 from './image/game1.jpg';
import img2 from './image/game2.jpg';

import img4 from './image/game 4.jpg';



function Corousal() {
  return (
    <>
      <div class="container">
        <input type="radio" name="slider" id="item-1" checked/>
        <input type="radio" name="slider" id="item-2"/>
        <input type="radio" name="slider" id="item-3"/>
      <div class="cards">
        <label class="card" for="item-1" id="song-1">
        <img src={img1} alt="song1" />
        </label>
        <label class="card" for="item-2" id="song-2">
          <img src={img2} alt="song"/>
        </label>
        <label class="card" for="item-3" id="song-3">
          <img src={img4} alt="song"/>
        </label>
      </div>
      <div class="player">
        <div class="upper-part">
          <div class="play-icon">
            <svg width="20" height="20" fill="#2992dc" stroke="#2992dc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-play" viewBox="0 0 24 24">
              <defs/>
              <a href=""><path d="M5 3l14 9-14 9V3z"/></a>
            </svg>
          </div>
          <div class="info-area" id="test">
            <label class="song-info" id="song-info-1">
              <div class="title">Python</div>
              <div class="sub-line">
                <div class="subtitle">Code Haven</div>
                <div class="time">40%</div>
              </div>
            </label>
            <label class="song-info" id="song-info-2">
              <div class="title">Frontend</div>
              <div class="sub-line">
                <div class="subtitle">Code haven</div>
                <div class="time">40%</div>
              </div>
            </label>
            <label class="song-info" id="song-info-3">
              <div class="title">Backend</div>
              <div class="sub-line">
                <div class="subtitle">Code Haven</div>
                <div class="time">40%</div>
              </div>
            </label>
          </div>
        </div>
        <div class="progress-bar">
          <span class="progress"></span>
        </div>
      </div>
    </div>
    </>
  );
}

export default Corousal;
