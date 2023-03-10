import React from 'react';
import './Navbar.css';

const Navbar = ({ score, topScore }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/logo.svg" alt="Logo" />
          <h1>Memory Game</h1>
        </a>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <p className="score">Score: {score}</p>
            </li>
            <li className="nav-item">
              <p className="score">Top Score: {topScore}</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
