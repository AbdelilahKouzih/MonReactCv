import React from "react";
import monImage from "./img_cv.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faEnvelope,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import './App.css'
export default function LeftSide() {
  return (
    <div className="container bg">
      
      <div className="image-container text-center img-container">
        <img
          src={monImage}
          alt=""
         
          className="profile-image img-thumbnail"
        />
      </div>
      <h4>ABDELILAH KOUZIH</h4>

      <nav>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
          <span>Accueil</span>
        </Link>

        <Link to="/compétences" >
          <FontAwesomeIcon icon={faTasks} />
           <span >Compétences</span>
        </Link>

        <Link to="/portfolio">
          <FontAwesomeIcon icon={faBriefcase} />
          <span >Portfolio</span>
        </Link>

        <Link to="/contact">
          <FontAwesomeIcon icon={faEnvelope} />
          <span >Contact</span>
        </Link>
      </nav>
      <nav className="list-unstyled mt-6 nava">
       
         
            <a href="https://www.linkedin.com/in/abdelilah-kouzih-957820245" className="text-dark heartbeat">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
         
        
            <a href="https://github.com/kozi11?tab=repositories" className="text-dark">
              <FontAwesomeIcon icon={faGithub} />
            </a>
       

      
            <a href="https://twitter.com/" className="text-dark">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
         
        
      </nav>
      <h5 className="text-center mt-4">Abdelilah-2023</h5>
    </div>
  );
}
