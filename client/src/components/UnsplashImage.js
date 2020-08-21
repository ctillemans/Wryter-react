import React from 'react';
import img from '../assets/images/yosemite.jpg';

const UnsplashImage = () => {
  return (
    <div className='unsplash-container'>
      <img src={img} alt='' className='unsplash-image' />
    </div>
  );
};

export default UnsplashImage;
