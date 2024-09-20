import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4">
      <div className="container">
        <div className="row">
          {/* Colonne 1: Informations de contact et réseaux sociaux */}
          <div className="col-md-3">
            <h5>John Doe</h5>
            <p>Adresse : 123 Rue de l'Exemple, Paris, France</p>
            <p>Téléphone : +33 1 23 45 67 89</p>
            <div>
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
              <br />
              <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <br />
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>

          {/* Colonne 2: Liens vers les pages */}
          <div className="col-md-3">
            <h5>Pages</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/legal">Mentions légales</Link></li>
            </ul>
          </div>

          {/* Colonne 3: Dernières réalisations */}
          <div className="col-md-3">
            <h5>Dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><Link to="/portfolio/project1">Projet 1</Link></li>
              <li><Link to="/portfolio/project2">Projet 2</Link></li>
              <li><Link to="/portfolio/project3">Projet 3</Link></li>
            </ul>
          </div>

          {/* Colonne 4: Derniers articles de blog */}
          <div className="col-md-3">
            <h5>Derniers articles</h5>
            <ul className="list-unstyled">
              <li><Link to="/blog/article1">Article 1</Link></li>
              <li><Link to="/blog/article2">Article 2</Link></li>
              <li><Link to="/blog/article3">Article 3</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; 2024 John Doe. Tous droits réservés.</p>
          <a href="#top" className="btn btn-primary">Retour en haut</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;