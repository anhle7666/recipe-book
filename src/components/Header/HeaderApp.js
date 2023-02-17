import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
function Header() {
    const [showNav, setShowNav] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const history = useNavigate();

    const handleLogin = () => {
        setLoggedIn(true);
        handleMenuClick(false);
        history("/login");
    };

    const handleLogout = () => {
        setLoggedIn(false);
        handleMenuClick(false);
        history("/login");
    };

    const handleMenuClick = () => {
        setShowNav(!showNav);
    };

    const items = [
        { path: "/", name: "Home", key: "home" },
        { path: "/book", name: "Book", key: "book" },
        { path: "/about", name: "Introduce", key: "intro" },
    ];

    return (
        <header>
            <nav className="header-nav">
                <div className="nav-brand"> </div>
                <div className="nav-menu-icon" onClick={handleMenuClick}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <ul className={showNav ? "nav-menu show" : "nav-menu"}>
                    {items.map((item) => {
                        return (
                            <li className="item" key={item.key}>
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        );
                    })}
                </ul>


                {loggedIn ? (
                    <button onClick={handleLogout} className="button">
                        Logout
                    </button>
                ) : (
                    <button onClick={handleLogin} className="button">
                        Login
                    </button>
                )}
            </nav>
        </header>
    );
}

export default Header;
