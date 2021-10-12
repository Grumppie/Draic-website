import React from 'react'
import "./navbar.css"


const Navbar = () => {
    return (
        <>
            {/* draic , home , about , projects, our team, contact */}

            <nav className="navbar">
                <ul className="nav-links">

                    <li className="nav-item" id="home">

                        <a href="/home" className="nav-link">
                            <i class="fas fa-home"></i>
                            <span className="link-text">home</span>
                        </a>
                    </li>
                    <li className="nav-item">

                        <a href="/about" className="nav-link">
                            <i class="fas fa-info-circle"></i>
                            <span className="link-text">about</span>
                        </a>
                    </li>
                    <li className="nav-item">

                        <a href="/projects" className="nav-link">
                            <i class="fas fa-robot"></i>
                            <span className="link-text">projects</span>
                        </a>
                    </li>
                    <li className="nav-item">

                        <a href="/ourTeam" className="nav-link">
                            <i class="fas fa-users"></i>
                            <span className="link-text">our team</span>
                        </a>
                    </li>
                    <li className="nav-item">

                        <a href="/contact" className="nav-link">
                            <i class="fas fa-envelope"></i>
                            <span className="link-text">contact</span>
                        </a>
                    </li>
                    <li className="nav-item">

                        <a href="/contact" className="nav-link">
                            <i class="fas fa-trophy"></i>
                            <span className="link-text">acheivements</span>
                        </a>
                    </li>
                    <li className="nav-item ">

                        <a href="/instagram" className="nav-link">
                            <i class="fab fa-instagram-square"></i>
                            <span className="link-text">instagram</span>
                        </a>
                    </li>
                    <li className="nav-item ">

                        <a href="/linkedin" className="nav-link">
                            <i class="fab fa-linkedin"></i>
                            <span className="link-text">linkedin</span>
                        </a>
                    </li>
                    <li className="nav-item ">

                        <a href="/twitter" className="nav-link">
                            <i class="fab fa-twitter-square"></i>
                            <span className="link-text">twitter</span>
                        </a>
                    </li>

                </ul>
            </nav>

        </>
    )
}

export default Navbar
