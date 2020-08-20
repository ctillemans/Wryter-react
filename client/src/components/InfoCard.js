import React from 'react';

const InfoCard = ({ img, caption }) => {
  return (
    <div className='info-card'>
      <div className='info-card__image'>
        <img src={img} alt='lightbulb' />
      </div>
      <div className='info-card__caption'>
        <h2>{caption}</h2>
      </div>
    </div>
  );
};
export default InfoCard;
