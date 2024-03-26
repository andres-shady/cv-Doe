import photo4 from "../image/photo4.jpg";
import photo5 from "../image/phot5.jpg";
import photo6 from "../image/phot6.jpg";
import photo7 from "../image/phot7.jpg";
import photo8 from "../image/phot8.jpg";
import photo9 from "../image/photo9.png";
import Card from 'react-bootstrap/Card';
import"./blog.css";
import p10 from "../image/p10.jpg";
import React from 'react';


function Blog() {
  return (
    <div className="vid">
      <div className="vid1">
        <img className="vid-image" src={p10} alt="" />
      <h1>BLOG</h1>
        <p className="pe">
          Retrouve ici quelque articles le devellopement web
        </p>
      </div>
        <div className="vid2">
      <Card className="videe">
        <Card.Img className="image" variant="top" src={photo4}/>
        <Card.Body className="texte">
          <Card.Text>  
            <h1 className="titre-blog">Coder son site en HTML et CSS</h1>
            <p className="p-blog">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              .
                </p>
                <button className="button-blog">Lire la suite</button>
                <p className="p2-blog">Publié le 22 aout 2022</p>
           
          </Card.Text>
        </Card.Body>
      </Card >
      <Card className="videe">
        <Card.Img className="image"  variant="top" src={photo5} />
        <Card.Body className="texte">
          <Card.Text >
          <h1 className="titre-blog">Vendres ses produits sur le web</h1>
            <p className="p-blog">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
               .
                </p>
                <button className="button-blog">Lire la suite</button>
                <p className="p2-blog">Publié le 20 aout 2022</p>
          </Card.Text>
        </Card.Body>
      </Card >
      <Card className="videe">
        <Card.Img className="image"  variant="top" src={photo6} />
        <Card.Body className="texte">
          <Card.Text  >
          <h1 className="titre-blog">Se positionner sur Google</h1>
            <p className="p-blog">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              .
                </p>
                <button className="button-blog">Lire la suite</button>
                <p className="p2-blog">Publié le 1 aout 2022</p>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className="vid3">
      <Card className="videe">
        <Card.Img className="image"  variant="top" src={photo7} />
        <Card.Body className="texte">
          <Card.Text  >
          <h1 className="titre-blog">Coder en respensive design</h1>
            <p className="p-blog">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
         .
                </p>
                <button className="button-blog">Lire la suite</button>
                <p className="p2-blog">Publié le 31 juillet 2022</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="videe">
        <Card.Img className="image"  variant="top" src={photo8} />
        <Card.Body className="texte">
          <Card.Text  >
          <h1 className="titre-blog">Techniques de référencement</h1>
            <p className="p-blog">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
               .
                </p>
                <button className="button-blog">Lire la suite</button>
                <p className="p2-blog">Publié le 30 Juillet 2022</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="videe">
        <Card.Img className="image"  variant="top" src={photo9} />
        <Card.Body className="texte">
          <Card.Text  >
          <h1 className="titre-blog">Apprendre a coder</h1>
            <p className="p-blog">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
               .
                </p>
                <button className="button-blog">Lire la suite</button>
                <p className="p2-blog">Publié le 12 juillet 2022</p>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
     
    </div>
  );
}
export default Blog;