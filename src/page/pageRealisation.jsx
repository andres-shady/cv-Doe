import photo1 from"../image/photo1.jpg";
import photo2 from"../image/p2.jpg";
import photo3 from"../image/phot3.jpg";
import p10 from "../image/p10.jpg";
import Card from 'react-bootstrap/Card';
import"./realisation.css";
import React from 'react';


function Realisation() {
  return (
    <div>
      <div className="div-intro">
         <img className="img-intro" src={p10} alt="" />
         <h1 className="titre-intro"> PORTFOLIO</h1>
         <h5 className="h3-intro">voici quelques-unes de mes réalisation </h5>
      </div>
    <div className="dive">
      <Card className="dive-1">
        <Card.Img className="image" variant="top" src={photo1}  />
        <Card.Body className="texte">
          <Card.Text>
           <h2 className="t-texte">Espace bien-etre</h2>
           <h6 className="t6-texte">Realisation d'une site vitrine pour un particien de bien-etre</h6>
           <button className="c">Voir</button>
           <h5 className="m">Site réaliser en html et css</h5>
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card className="dive-2">
        
        <Card.Img className="image" variant="bottom" src={photo2} />
        <Card.Body className="texte">
          <Card.Text >
          <h2 className="t-texte">Fresh-food</h2>
           <h6 className="t6-texte">Realisation ave un site commande en ligne</h6>
           <button className="c">Voir</button>
           <h5 className="m">site réaliser avec PHP et MySQL</h5>
          </Card.Text>
          </Card.Body>
      </Card>
      
      <Card className="dive-3">
        <Card.Img className="image" variant="top" src={photo3} />
        <Card.Body className="texte">
          <Card.Text >
          <h2 className="t-texte">Restaurant Akira</h2>
           <h6 className="t6-texte">Realisation d' un site vitrine</h6>
           <button className="c">Voir</button>
           <h5 className="m">site réaliser avec Worldpress</h5>
          </Card.Text>
        </Card.Body>
      </Card>
    
      </div>
    </div>
  );
}

export default Realisation;