import React from 'react'
import "./navbar.css"
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            {/* draic , home , about , projects, our team, contact */}

            <nav className="navbar">
                <ul className="nav-links">

                    <li className="nav-item" id="home">

                        <Link to="/home" className="nav-link">
                            <i class="fas fa-home"></i>
                            <span className="link-text">home</span>
                        </Link>
                    </li>
                    <li className="nav-item">

                        <Link to="/about" className="nav-link">
                            <i class="fas fa-info-circle"></i>
                            <span className="link-text">about</span>
                        </Link>
                    </li>
                    <li className="nav-item">

                        <Link to="/projects" className="nav-link">
                            <i class="fas fa-robot"></i>
                            <span className="link-text">projects</span>
                        </Link>
                    </li>
                    <li className="nav-item">

                        <Link to="/ourTeam" className="nav-link">
                            <i class="fas fa-users"></i>
                            <span className="link-text">our team</span>
                        </Link>
                    </li>
                    <li className="nav-item">

                        <Link to="/contact" className="nav-link">
                            <i class="fas fa-envelope"></i>
                            <span className="link-text">contact</span>
                        </Link>
                    </li>
                    <li className="nav-item">

                        <Link to="/acheivement" className="nav-link">
                            <i class="fas fa-trophy"></i>
                            <span className="link-text">acheivements</span>
                        </Link>
                    </li>
                    <div className="socials">
                        <li className="nav-item ">

                            <Link to="/instagram" className="nav-link">
                                <i class="fab fa-instagram-square"></i>

                            </Link>
                        </li>
                        <li className="nav-item ">

                            <Link to="/linkedin" className="nav-link">
                                <i class="fab fa-linkedin"></i>

                            </Link>
                        </li>
                        <li className="nav-item ">

                            <Link to="/twitter" className="nav-link">
                                <i class="fab fa-twitter-square"></i>

                            </Link>
                        </li>
                    </div>


                </ul>
            </nav>

        </>
    )
}

export default Navbar
