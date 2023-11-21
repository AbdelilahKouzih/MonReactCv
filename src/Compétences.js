import data from "./data.json";
import React, { useEffect } from "react";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,faStar      
} from "@fortawesome/free-solid-svg-icons";
export default function Compétences() {
  useEffect(() => {
    // Cette fonction sera exécutée une fois que le composant est monté
    $(".animated-progress span").each(function () {
      $(this).animate(
        {
          width: $(this).attr("data-progress") + "%",
        },
        1000
      );
    });
  }, []);

  return (
    <div className="cométencesContainer">
      <div className="solutionScroll">
        <div className="ContainerSection">
          <div>
            <h2 class="animate-charcter"> LANGAGES</h2>

            <ul>
              {data.langages.map((langage, index) => (
                <li key={index}>
                  {langage.nom}
                  <div class="animated-progress progress-blue">
                    <span data-progress={langage.niveau}></span>
                  </div>
                </li>
              ))}
            </ul>

            <h2 class="animate-charcter">Frameworks & bibliothèques</h2>

            <ul>
              {data.frameworks.map((framework, index) => (
                <li key={index}>
                  {framework.nom}
                  <div class="animated-progress progress-blue">
                    <span data-progress={framework.niveau}></span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 class="animate-charcter">Expérience</h2>
            <div className="experience-list ">
              {data.experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <h3 className="exp-poste">{exp.poste}</h3>
                  <span className="exp-annee">{exp.annee}</span>
                  <p className="exp-description">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="ContainerSection">
          <div className="autresDiv">
            <h2 class="animate-charcter"> Autres compétences</h2>
            <ul className="competences-list">
              {data.autresCompetences.map((competence, index) => (
                <li key={index}><FontAwesomeIcon icon={faCheckSquare}/>{competence}</li>
              ))}
            </ul>
          </div>
          <div className="autresDiv" >
            <h2 class="animate-charcter interetsDiv">Intérêts</h2>

            <ul className="competences-list">
              {data.interets.map((interet, index) => (
                <li key={index}><FontAwesomeIcon icon={faStar }/>{interet}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
