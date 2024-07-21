import React from 'react';
import logo from "../../assets/Logo.png"; // Importing the logo image
import "./Logo.css"; // Importing the CSS file for styling

const Logo = () => {
    return (
        <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
        </div>
    );
};

export default Logo;
