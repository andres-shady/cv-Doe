import"./service.css"
import React from 'react';
import p10 from "../image/p10.jpg";


function Service(){
    return(
      <div className="d">
        <div className="d1">
        <img className="i-service" src={p10} alt="intro" />
        <h1 className="t-service">MON OFFRE DE SERVICE</h1>
        <p className="p1-service">
          Voici les prestations
           sur lesquelle je peux intervenir
         </p>
        </div>
        <div className="d2">
          <div className="d2-1">
            <h3 className="t2-titre">UX DESIGN</h3>
            <p className="p2-service">l'<strong>UX Design</strong>est une methode de conception concentrée
            sur l'utilisateur.Son  but est d'offrir une experience de navigation 
            optimale à l'internaute.
            </p>
          </div>
          <div className="d2-2">
            <h3  className="t2-titre">DEVELLOPEMENT WEB</h3>
            
            <p className="p2-service">le <strong> déveleppoment de sites web</strong> repose sur
              l'utilisation des langages HTML,CSS,Javascript ET PHP 
               </p>
          </div>
          <div className="d2-3">
            <h3  className="t2-titre">REFERENCEMENT</h3>
            <p className="p2-service">le <strong>référencement naturel d'un site</strong>,aussi
            appelé SEO,consiste à mettre des techniques en oeuvre pour
            améliorer sa position dans les résultats des moteurs de recherche
            </p>
          </div>
        </div>

      </div>

    )
}
export default Service