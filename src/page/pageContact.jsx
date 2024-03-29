
import React, { useState } from 'react';
import contact from "../image/contact.jpg";
import"./contact.css";
import tel from"../image/smartphone.png";
import localisation from"../image/location.png";
import carte from "../image/carte.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server or API)
    console.log('Form data submitted:', formData);
  };

  return (
    <div className='D' style={{backgroundImage:`url(${contact})`,backgroundSize:'cover',}}>
       <div className='d-ensemble'>
          <div className='t-contact'>
                <h1 className='h1-contact'>ME CONTACTER</h1>
                <p className='p-contact'> Pour me contacter en vue d'un entretien ou d'une
                   future collaboration,merci de remplir le formulaire de contact
                </p>
          </div>
          <div className='dd'>
            <form className='ddd' onSubmit={handleSubmit}>
                <div>
                     <h2 className='h2-contact'> Formule de contact</h2>
                    <input
                       placeholder="Entrez votre nom"
                       type="text"
                       id="name"
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                       required
                    />
                </div>
                <div className='d'>
                  <input
                       placeholder="Entrez votre E-mail"
                       type="email"
                       id="email"
                       name="email"
                       value={formData.email}
                       onChange={handleChange}
                       required
                  />
                </div>
                <div className='d'>
                  <input
                       placeholder="Entrez votre nom"
                       type="tel"
                       id="phone"
                       name="phone"
                       value={formData.phone}
                       onChange={handleChange}
                  />
                </div>
                <div className='d'>
                  <input
                       placeholder="Entrez votre sujet"
                       type="text"
                       id="subject"
                       name="subject"
                       value={formData.subject}
                       onChange={handleChange}
                       required
                  />
                </div>
                <div className='d'>
                  <textarea
                       placeholder="votre message"
                       id="message"
                       name="message"
                       value={formData.message}
                       onChange={handleChange}
                       rows={4}
                       required
                  />
                </div>
                       <button type="submit" className='envoyer'>Envoyer</button>
     -      </form>
    
            <div className='d-6'>
              <h2 className='h2-contact'>Mes coordonnéés</h2>
              <div className='photo-div'>
                  <img className='img-contact' src={localisation} alt="logo" />
                  <p>404 Rue Laure Diebold 69009 Lyon,France</p>
              </div>
              <div className='photo-div'>
                <img  className='img-contact' src={tel} alt="logo" />
                <p>06 20 30 40 50</p>
              </div>
              <img className='carte' src={carte} alt="carte" />
            </div>
          </div>
        </div>
    </div>
  
  );
}

export default Contact;