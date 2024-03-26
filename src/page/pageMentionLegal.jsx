
import Accordion from 'react-bootstrap/Accordion';
import"./service.css";
import React from 'react';
import planet from"../image/globe.png";
import tel from"../image/smartphone.png";
import localisation from"../image/location.png";
import enveloppe from"../image/letter.png";
import"./mentionsLegal.css";


function MentionLegal() {
  return (
    <Accordion>
      <h1 className='k'>MENTION LEGAL</h1>
      <Accordion.Item eventKey="0">
        <Accordion.Header>L'éditeur du site</Accordion.Header>
        <Accordion.Body>
          <h1>John Doe</h1>
          <div className='accordio'>
            <img className='x' src={localisation} alt="" />
            <p>40 Rue Laure Diebold 69009 Lyon,France</p>
          </div>
          <div className='accordio'>
            <img className='x'  src={tel} alt="" />
          
           <a href="tel:+06 20 30 40 50">06 20 30 40 50</a>
          </div>
          <div className='accordio'>
            <img className='x'  src={enveloppe} alt="" />
           <a href="mailto:John.doe@gmail.com">John.doe@gmail.com </a> 
          </div>
       
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>L'hébergeur du site</Accordion.Header>
        <Accordion.Body>
           <h1 className='h'>Always Data</h1>
           <p>91 rue du faubourg Saint Honoré</p>
           <p>75008 Paris</p>
           <div className='accordio'>
            <img className='x'  src={planet} alt="" />
           <a href="www.alwaysdata.com">www.alwaysdata.com</a> 
           </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Pixabay</Accordion.Header>
        <Accordion.Body>
            <h1 className='h'>Crédits</h1>
            <p>Ite dévelippé par Jhon Doe, étudiant du CEF</p>  
          <p>Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/">pixabay</a></p>
       
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MentionLegal;