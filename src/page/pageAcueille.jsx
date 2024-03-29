
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import image from"./ordinateu.jpg";
import jhon from "../image/john.jpg";
import"./accueille.css";
import ProgressBar from 'react-bootstrap/ProgressBar';

function ContextualExample() {
    return (
      <div className='progress-div'>
        <p>JAVASCRIPT 60%</p>
        <ProgressBar className='progress' variant="success" now={60} />
        <p>PHP 20%</p>
        <ProgressBar variant="info" now={20} />
        <p>CSS 80 %</p>
        <ProgressBar variant="warning" now={80} />
          <p>HTML5 90%</p>
        <ProgressBar variant="danger" now={90} />
      </div>
    );
  }
function Acueille(){
    return(
        
            <main>
                <div className="div1" style={{backgroundImage:`url(${image})`,backgroundSize:'cover'}}>
                 <h1>BIENVENUE</h1>
                <h2>Je vous souhaite une bonne experience</h2>
                <button className="bouton1">en savoir plus</button>
                </div>

                <div className="div2">
                    <div className="div2-1">
                    <h2 className="hi">A Propos</h2>
                   <p>
                    Passionés par les technologies , j'ai suivi une formation d'<strong>integreur developpeur web</strong>   au
                   CEF. Au cours de cette formation,j'ai pu acquerir des bases solid pour travailler 
                    dans le domaine de <strong>developpement web</strong> 
                    </p> 

                    <p>
                     Basé a Lyon.Je suis un chercheur d'un alternance au sein d'une agence digitale
                     pour consolider ma formation de <strong>devellopeur fullstack</strong> 
                    </p>
                    <p>
                        j'accporde un attention particuliere a la qualité  du code que j'écris et 
                        je respecte les bonnes pratiques du web

                    </p>
                    </div>
                    <div className="div2-2">
                  
                    <img className="l" src={jhon} alt="john" />
                    <h2 className='ha'>Mes Competences</h2>
                      <ContextualExample></ContextualExample>
                   </div>
                </div>
               
            </main>
            
        
         
    )
    
}
export default Acueille;
