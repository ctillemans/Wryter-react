import React, { useState } from 'react';

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
          <h1 className='header__logo'>Wryter</h1>
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
          <li className='navlist__item '>First Item</li>
          <li className='navlist__item '>First Item</li>
          <li className='navlist__item '>First Item</li>
          <li className='navlist__item '>First Item</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
