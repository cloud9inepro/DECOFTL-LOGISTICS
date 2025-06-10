import React from 'react';
import logo from '../assets/logo.png';
const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="LOGO" className='logo' />
      </div>
      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Track Order</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </nav>
    
    </header>
  );
};

export default Header;
