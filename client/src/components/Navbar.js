import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navState, setNavState] = useState('collapsed');
  function toggleNav() {
    setNavState(navState === 'collapsed' ? 'expanded' : 'collapsed');
  }
  return (
    <div className='header-section'>
      <div
        className={`header-container ${
          navState === 'collapsed' ? '' : 'header-container--expanded'
        }`}
      >
        <div className='header'>
          <Link to='/'>
            <h1 className='header__logo'>Wryter</h1>
          </Link>
          <div
            className={`header__hamburger ${
              navState === 'collapsed' ? '' : 'header__hamburger--expanded'
            }`}
            onClick={toggleNav}
          >
            <span className='hamburger__bar hamburger__bar--top'></span>
            <span className='hamburger__bar hamburger__bar--middle'></span>
            <span className='hamburger__bar hamburger__bar--bottom'></span>
          </div>
        </div>
      </div>
      <div
        className={`nav-container ${
          navState === 'collapsed' ? '' : 'nav-container--expanded'
        }`}
      >
        <ul className='navlist custom-list'>
          <li className='navlist__item '>
            <Link exact to='/' onClick={toggleNav}>
              Home
            </Link>
          </li>
          <li className='navlist__item '>
            <Link exact to='/login' onClick={toggleNav}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
