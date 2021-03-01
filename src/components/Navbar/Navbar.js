import React from 'react';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand logo fw-bold fs-3" href="/home">Team <span>Hired</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link active fw-bold" aria-current="page" href="/home">Home</a>
                            <a className="nav-link fw-bold" href="/about">About Us</a>
                            <a className="nav-link fw-bold" href="/hire">Hire</a>
                            <a className="nav-link fw-bold" href="/contact">Contact Us</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;