import React from "react";
import { Link } from "react-router-dom";
import logo from "./logos/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-dark navbar-expand-md fixed-top mt-0 navbar-scrolled">
          <Link to="/" className="navbar-brand mb-0 h1">
            <img
              className="d-inline-block"
              src={logo}
              alt="logo"
              width="140"
            />
            ChEA
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-item active">
                <a href="/" className="nav-link">
                  Events
                </a>
              </li>
              <li className="nav-item active">
                <Link to="/sponsers" className="nav-link">
                  Sponsers
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/merchandise" className="nav-link">
                  Merchandise
                </Link>
              </li>

              <li className="nav-item active">
                <a href="/" className="nav-link">
                  Register Here
                </a>
              </li>

              <li className="nav-item active">
                <a href="#footer" className="nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
