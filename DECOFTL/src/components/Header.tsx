import React from 'react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      
        <img src={logo} alt="LOGO" className='logo' />
       
      <nav>
        <ul>
         <li><Link to="/">Home</Link></li>
          <li><Link to="/">Track</Link></li>
        <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
          
        </ul>
      </nav>
      
           <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <aside className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Track</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
        </ul>
      </aside>
      
    </header>
  );
};

export default Header;
