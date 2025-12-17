import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="navbar-scope">
            <header className="header-container">
                {/* Header */}
                <div className="header-main">
                    <Link to="/"><div className="header-main-logo">
                        <div className="header-main-logo-img"></div>
                        <p>at UCSC</p>
                    </div></Link>

                    <div className="header-main-right">
                        {/* Desktop Nav */}
                        <nav className="desktop-nav">
                            <ul>
                                <li><Link to="/about">about</Link></li>
                                <li><Link to="/committees">committees</Link></li>
                                <li><Link to="/events">events</Link></li>
                            </ul>
                        </nav>

                        <a href="#" className="member-login-btn">member login</a>

                        {/* Mobile Menu Trigger */}
                        <div className="menu-trigger" onClick={toggleMenu}>
                            <div className="menu-icon-bar"></div>
                            <div className="menu-icon-bar"></div>
                            <div className="menu-icon-bar"></div>
                        </div>

                        {/* Dropdown Menu */}
                        {isMenuOpen && (
                            <div className="dropdown-menu">
                                <ul>
                                    <li><Link to="/about" onClick={toggleMenu}>about</Link></li>
                                    <li><Link to="/committees" onClick={toggleMenu}>committees</Link></li>
                                    <li><Link to="/events" onClick={toggleMenu}>events</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </header>
            {/* New element for the gradient strip */}
            <div className="navbar-separator"></div>
        </div>
    );
}

export default Navbar;