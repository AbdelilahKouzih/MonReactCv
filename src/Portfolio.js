import React, { useState } from "react";
import data from "./data.json";
export default function Portfolio() {
  const [langageSelectionne, setLangageSelectionne] = useState(null);
  const handleLangageSelection = (langageId) => {
    setLangageSelectionne(langageId);
  };

  const projetsFiltres = langageSelectionne
    ? data.projets.filter((projet) => projet.langageId === langageSelectionne)
    : data.projets;

  return (
    <div>
      <div className="solutionScroll">
      <div className="langages-nav">
        <ul>
          {data.langages.map((langage) => (
            <li key={langage.id}>
              <button onClick={() => handleLangageSelection(langage.id)}>
                {langage.nom}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="projets">
        {projetsFiltres.map((projet) => (
          <div key={projet.id} className="projet-card">
          <img src={`${process.env.PUBLIC_URL}/images/${projet.image}`} alt={projet.nom} />
            <h2>{projet.nom}</h2>
            <a
              href={`lien_vers_le_projet_${projet.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le projet
            </a>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
