import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__content'>
        <ul className='footer__list list'>
          <h2>More Info</h2>
          <li className='list__item'>
            <Link to='#' style={{ textDecoration: 'none' }}>
              About
            </Link>
          </li>
          <li className='list__item'>
            <Link to='#' style={{ textDecoration: 'none' }}>
              Contact
            </Link>
          </li>
          <li className='list__item'>
            <Link to='#' style={{ textDecoration: 'none' }}>
              FAQ
            </Link>
          </li>
          <li className='list__item'>
            <a style={{ textDecoration: 'none' }}>Github</a>
          </li>
        </ul>
        <ul className='footer__list list'>
          <h2>Resources</h2>
          <li className='list__item'>
            <Link to='#' style={{ textDecoration: 'none' }}>
              About
            </Link>
          </li>
          <li className='list__item'>
            <Link to='#' style={{ textDecoration: 'none' }}>
              Contact
            </Link>
          </li>
          <li className='list__item'>
            <Link to='#' style={{ textDecoration: 'none' }}>
              FAQ
            </Link>
          </li>
          <li className='list__item'>
            <a style={{ textDecoration: 'none' }}>Github</a>
          </li>
        </ul>
        <div className='subscribe'>
          <div className='subscribe__content'>
            <h2 className='subscribe__title'>Subscribe</h2>
            <div className='subscribe__input input'>
              <label htmlFor='email-subscription'>
                <input
                  type='email'
                  name='email-subscription'
                  placeholder='Email'
                />
                Email
              </label>
            </div>
          </div>
        </div>
        <div className='copyright'>
          <p className='copyright__description'>
            © 2020 Wryter. All Rights Reserved.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
