import React from "react";
import monCv from "./cv.pdf";
import "./App.css"; // Import your CSS file
import "./animation.js";
export default function CV() {
  return (
    <div className="accueil">
      <div class="content">
        <h2>ABDELILAH</h2>
        <h2>ABDELILAH</h2>
      </div>
      <div className="bottomAcc">
        <p className="subtitle">Développeur web</p>
        <a href={monCv} download>
          <button className="download-button">Télécharger CV</button>
        </a>
      </div>
      <div className="animation3D">
      <figure class="scene">
        <div class="cube">
          <div class="cube-face front"></div>
          <div class="cube-face back"></div>
          <div class="cube-face left"></div>
          <div class="cube-face right"></div>
          <div class="cube-face top"></div>
          <div class="cube-face bottom"></div>
        </div>
      </figure>
      <figure  class="scene1">
        <div class="cube">
          <div class="cube-face front"></div>
          <div class="cube-face back"></div>
          <div class="cube-face left"></div>
          <div class="cube-face right"></div>
          <div class="cube-face top"></div>
          <div class="cube-face bottom"></div>
        </div>
      </figure>

      <figure  class="scene2">
        <div class="cube">
          <div class="cube-face front"></div>
          <div class="cube-face back"></div>
          <div class="cube-face left"></div>
          <div class="cube-face right"></div>
          <div class="cube-face top"></div>
          <div class="cube-face bottom"></div>
        </div>
      </figure>
      </div>
    </div>
  );
}
