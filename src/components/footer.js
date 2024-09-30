import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {  
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-light text-dark py-4">
      <div className="container"> {/* Ajout de la classe container ici */}
        <div className="row">
          {/* Colonne 1: Informations de contact et réseaux sociaux */}
          <div className="col-md-3">
            <h5>Philippe Peeters</h5>
            <p>Adresse : 1 lieu dit Bélia, 33710 Saint Seurin de Bourg, France</p>
            <p>Téléphone : 06 62 77 97 09</p>
            <div className="d-flex">
              <a
                href="https://github.com/Philou-Bourg"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="social-icon github"
              >
                <i className="fab fa-github"></i> {/* GitHub: chat blanc, fond noir, cercle */}
              </a>
              <a
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="social-icon twitter"
              >
                <i className="fab fa-twitter"></i> {/* Twitter: oiseau blanc, fond noir, carré */}
              </a>
              <a
                href="https://www.linkedin.com/in/philippe-peeters-a6a6645a/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="social-icon linkedin"
              >
                <i className="fab fa-linkedin"></i> {/* LinkedIn: "IN" blanc, fond noir, carré */}
              </a>
            </div>
          </div>

          {/* Colonne 2: Liens vers les pages */}
          <div className="col-md-3">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="custom-link">Accueil</Link></li>
              <li><Link to="/" className="custom-link">À propos</Link></li>
              <li><Link to="/services" className="custom-link">Services</Link></li>
              <li><Link to="/contact" className="custom-link">Me contacter</Link></li>
              <li><Link to="/legal" className="custom-link">Mentions légales</Link></li>
            </ul>
          </div>

          {/* Colonne 3: Dernières réalisations */}
          <div className="col-md-3">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><Link to="/portfolio/project1" className="custom-link">Fresh food</Link></li>
              <li><Link to="/portfolio/project2" className="custom-link">Restaurant Akira</Link></li>
              <li><Link to="/portfolio/project3" className="custom-link">Espace bien-être</Link></li>
            </ul>
          </div>

          {/* Colonne 4: Derniers articles de blog */}
          <div className="col-md-3">
            <h5>Mes derniers articles</h5>
            <ul className="list-unstyled">
              <li><Link to="/blog/article1" className="custom-link">Coder son site en HTML/CSS</Link></li>
              <li><Link to="/blog/article2" className="custom-link">Vendre ses produits sur le web</Link></li>
              <li><Link to="/blog/article3" className="custom-link">Se positionner sur Google</Link></li>
            </ul>
          </div>
        </div>
      </div>
        <div className="footer text-center mt-3">
          <div className="footer-bar">
            <div className="container"> {/* Ajout de la classe container ici */}
              <p className="footer-text">&copy; Designed by Philippe Peeters</p>
            </div>    
          </div>
          {showScroll && (
            <button
              onClick={scrollToTop}
              className="btn"
              style={{ backgroundColor: '#298eff', color: '#fff' }}
              aria-label="Retour en haut de la page"
            >
              Retour en haut
            </button>
          )}
        </div>
      

      {/* Styles pour les liens personnalisés et les icônes */}
      <style jsx>{`
        .custom-link {
          color: #444; /* Texte des liens en #444 */
          position: relative;
          padding-left: 15px;
          text-decoration: none;  /* Suppression du soulignement */
        }

        .custom-link::before {
          content: '>';
          position: absolute;
          left: 0;
          color: #0d6efd; /* Le symbole > en #0d6efd */
        }

        .custom-link:hover {
          text-decoration: underline;
        }

        .social-icon {
          margin-right: 10px;
          color: #000;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background-color 0.3s ease, border 0.3s ease;
        }

        .social-icon i {
          font-size: 20px;
        }

        /* GitHub: chat blanc, cercle */
        .github {
          background-color: #f8f9fa;
          border-radius: 50%;
          padding: 10px;
          width: 40px;
          height: 40px;
          border: 2px solid transparent;
        }

        /* Twitter: fond noir, oiseau blanc, carré */
        .twitter {
          color: #fff;
          background-color: #000;
          padding: 10px;
          width: 40px;
          height: 40px;
          border: 10px solid #f8f9fa;
          transition: background-color 0.3s ease;
        }

        /* LinkedIn: fond noir, "IN" blanc, carré */
        .linkedin {
          background-color: #f8f9fa;
          padding: 10px;
          width: 40px;
          height: 40px;
          border: 2px solid transparent;
        }

        .social-icon:hover {
          background-color: rgba(255, 255, 255, 0.8);
        }

        .github:hover,
        .linkedin:hover {
          background-color: rgba(255, 255, 255, 0.8);
          border: 2px solid #000;
        }

        .twitter:hover {
          border: 2px solid #000;
          background-color: #fff;
          color: #000;
        }

        .footer-bar {
          background-color: #000; /* Fond noir */
          padding: 10px 0; /* Optionnel : Ajoute un peu de padding vertical */
          
        }

        .footer-text {
          color: #fff; /* Texte blanc */
          margin: 0; /* Supprime les marges par défaut */
        }

      `}</style>
    </footer>
  );
};

export default Footer;
