import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-5 pb-3">
            <div className="container border-top">
                <p>Copyright © 2021 - Team Hired. Build by <FontAwesomeIcon icon={faHeart} className="me-1 text-danger" />Md. Yeasin</p>
            </div>
        </footer>
    );
};

export default Footer;