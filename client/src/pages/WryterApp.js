import React from 'react';
import UnsplashImage from '../components/UnsplashImage';
import WryterBox from '../components/WryterBox';

const WryterApp = () => {
  return (
    <div className='wryter-container'>
      <UnsplashImage />
      <WryterBox />
    </div>
  );
};

export default WryterApp;
