import React from 'react'
import './Developer.css';
import img1 from './image/saify.jpg';
import img2 from './image/milind.jpeg';
import img3 from './image/sujal.jpeg';
import img4 from './image/kartik.jpeg';

function Developer() {
  return (
    <>
      <div class="container">
      <div class="developer-box">
        <div class="developer-photo">
          <img src={img1} alt="Developer 1" />
        </div>
        <div class="developer-info">
          <h3>Saify Sheikh</h3>
          <p>Frontend Developer</p>
        </div>
      </div>
      <div class="developer-box">
        <div class="developer-photo">
          <img src={img2} alt="Developer 2" />
        </div>
        <div class="developer-info">
          <h3>Milind dadore</h3>
          <p>Backend Developer</p>
        </div>
      </div>
      <div class="developer-box">
        <div class="developer-photo">
          <img src={img3} alt="Developer 3" />
        </div>
        <div class="developer-info">
          <h3>Sujal Agarwal</h3>
          <p>Full Stack Developer</p>
        </div>
      </div>
      <div class="developer-box">
        <div class="developer-photo">
          <img src={img4} alt="Developer 4" />
        </div>
        <div class="developer-info">
          <h3>Kartik Vhonale</h3>
          <p>UI/UX Designer</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Developer