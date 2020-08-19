import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/main.scss';

const Header = () => {
  return (
    <>
      <div className='section__header Hero-1'>
        <div className='header'>
          <div className='header__shadow'></div>
          <div className='header__content-wrapper'>
            <h1 className='header__title'>Wryter</h1>
            <p className='header__description'>
              There is nothing more exciting than a blank page
            </p>
            {/* TODO make link button class that takes props */}
            <div className='button header__button'>
              <Link to='/write'>Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
