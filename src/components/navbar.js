import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container"> {/* Ajout de la classe container ici */}
        <a className="navbar-brand font-bold" href="/">Philippe Peeters</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                className="nav-link text-uppercase" 
                exact 
                to="/" 
                activeClassName="active" 
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase" to="/services" activeClassName="active">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase" to="/portfolio" activeClassName="active">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase" to="/blog" activeClassName="active">Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase" to="/contact" activeClassName="active">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-uppercase" to="/legal" activeClassName="active">Mentions légales</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
