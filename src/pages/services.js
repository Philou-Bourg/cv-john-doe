import React from 'react';
import './services.css'; // Import du fichier CSS

const Services = () => {
  return (
    <div>
      {/* Ajout de l'image responsive */}
      <img 
        src="/img/banner.jpg" 
        alt="Bannière de service" 
        className="banner"
      />
     
      <h1>MON OFFRE SERVICES</h1>
      {/* Contenu de la page des services */}
      <p id="offre-services" className="offre-services">
        Voici les prestations sur lesquelles je peux intervenir
      </p>
    </div>
  );
};

export default Services;