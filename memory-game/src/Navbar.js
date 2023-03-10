import React from "react";
import './styles.css';

function Navbar({ score, topScore }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Memory Game
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <h5 className="nav-link">
                Score: <span className="badge bg-primary">{score}</span>
              </h5>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

