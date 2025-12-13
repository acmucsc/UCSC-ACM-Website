import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // Toggle burger menu
    const updateBurgerMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("burger-menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("burger-menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div className="navbar-scope">
            <header className="header-container">
                {/* Burger menu */}
                <div className={menu_class}>
                    <nav className="burger-menu-contents">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/events">Events</Link></li>
                            <li><Link to="/team">Team</Link></li>
                        </ul>
                    </nav>
                </div>
                {/* Header */}
                <div className="header-main">
                    <Link to="/"><div className="header-main-logo">
                        <div className="header-main-logo-img"></div>
                        <p>at UCSC</p>
                    </div></Link>

                    <div className="header-main-right">
                        <nav className="desktop-nav">
                            <ul>
                                <li><Link to="/team">committees</Link></li>
                                <li><Link to="/about">initiatives</Link></li>
                                <li><Link to="/events">events</Link></li>
                                <li><Link to="/about">about</Link></li>
                            </ul>
                        </nav>

                        <a href="#" className="member-login-btn">member login</a>

                        <div className="mobile-burger-trigger">
                            <div className="burger-btn-lines" onClick={updateBurgerMenu}>
                                <div className={burger_class}></div>
                                <div className={burger_class}></div>
                                <div className={burger_class}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* New element for the gradient strip */}
            <div className="navbar-separator"></div>
        </div>
    );
}

export default Navbar;