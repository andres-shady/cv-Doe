import photo4 from "../image/photo4.jpg";
import photo5 from "../image/phot5.jpg";
import photo6 from "../image/phot6.jpg";
import photo7 from "../image/phot7.jpg";
import photo8 from "../image/phot8.jpg";
import photo9 from "../image/photo9.png";
import Card from 'react-bootstrap/Card';
import"./realisation.css"
import React from 'react';


function Blog() {
  return (
    <>
        <p className="pe">Dans ce artictle je vous montre tout les etapes et
           les choses que j'ai travailler pendant ma formation.
           je vais aussi vous montre les haut et les bas de ma formation
        </p>
      <Card className="dive">
        <Card.Img className="image" variant="top" src={photo4}/>
        <Card.Body>
          <Card.Text  className="texte">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card >
      <Card className="dive">
        <Card.Img className="image"  variant="top" src={photo5} />
        <Card.Body>
          <Card.Text className="texte">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card >
      <Card className="dive">
        <Card.Img className="image"  variant="top" src={photo6} />
        <Card.Body>
          <Card.Text  className="texte">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="dive">
        <Card.Img className="image"  variant="top" src={photo7} />
        <Card.Body>
          <Card.Text  className="texte">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="dive">
        <Card.Img className="image"  variant="top" src={photo8} />
        <Card.Body>
          <Card.Text  className="texte">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="dive">
        <Card.Img className="image"  variant="top" src={photo9} />
        <Card.Body>
          <Card.Text  className="texte">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
     
    </>
  );
}
export default Blog;