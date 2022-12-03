import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../images/Salfetnik_Logo1.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="title">
            <img src={Logo} alt="Logo" className="logo"></img>
        </Link>
        <div className="links">
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <a href="https://www.instagram.com/kirill.salfetnik/">Instagram</a>
            <a href="https://github.com/kirsalfetnik">GitHub</a>
        </div>
    </nav>
  )
}

export default Navbar