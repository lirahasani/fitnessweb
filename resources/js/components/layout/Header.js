import React from 'react';
import "../../../assets/scss/logo.styles.scss";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand logo" href="#">Fit-Bit</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Personalized Diets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Personalized Workouts</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
