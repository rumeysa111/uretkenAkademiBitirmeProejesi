import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    MERAM BELEDİYESİ 
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                     <NavLink className="nav-link" to="/">Ana Sayfa</NavLink>
                     <NavLink className="nav-link" to="/About">Hakkımızda</NavLink>
                     
                     <NavLink className="nav-link" to="/Gezilecek">Gezilecek Yerler </NavLink>

                     <NavLink className="nav-link" to="/parklar">Parklar </NavLink>

                     <NavLink className="nav-link" to="/istek">Öneri ve Şikayet </NavLink>
                  </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
