import React from 'react';
import Logo from '../assets/images/Logo.png';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse nav1" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/programmes">
                  PROGRAMMES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/nos-campus">
                  NOS CAMPUS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/galerie">
                  GALERIE
                </a>
              </li>
              <li className="nav-item border border-warning bdw">
                <a className="nav-link" href="/nous-rejoindre">
                  NOUS REJOINDRE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/nous-rejoindre">
                  <FaSearch />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
