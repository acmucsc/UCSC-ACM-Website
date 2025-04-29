import React, { useState } from "react";

import './Navbar.css'

const Navbar = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // Toggle burger menu
    const updateBurgerMenu = () => {
        if(!isMenuClicked) {
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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Team</a></li>
                    </ul>
                </nav>
            </div>
            {/* Header */}
            <div className="header-main">
                <a href="#"><div className="header-main-logo">
                    <div className="header-main-logo-img"></div>
                    <p>at UC Santa Cruz</p>
                </div></a>
                <nav className="header-main-nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Team</a></li>
                    </ul>
                </nav>
                <div className="header-main-sm">
                    <a target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/XjSuxtbJxK">
                        <div className="header-main-sm-di"></div>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ucscacm/">
                        <div className="header-main-sm-in"></div>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/ucsc-association-for-computing-machinery-acm">
                        <div className="header-main-sm-ln"></div>
                        </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ACMResearchLab">
                        <div className="header-main-sm-gh"></div>
                    </a>
                    {/* Button to activate burger menu, only on mobile */}
                    <nav>
                        <div className="burger-btn-lines" onClick={updateBurgerMenu}>
                            <div className={burger_class}></div>
                            <div className={burger_class}></div>
                            <div className={burger_class}></div>
                        </div>
                    </nav>
                </div>
            </div> 
        </header>
        </div>
    );
}

export default Navbar;