import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='section__hero Hero-1'>
        <div className='hero'>
          <div className='hero__shadow'></div>
          <div className='hero__content-wrapper'>
            <h1 className='hero__title'>
              Wryter
              <span className='logo-period'>.</span>
            </h1>
            <p className='hero__description'>
              There is nothing more exciting than a blank page
            </p>
            {/* TODO make link button class that takes props */}
            <div className='button hero__button'>
              <Link to='/write'>Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
