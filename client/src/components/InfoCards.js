import React from 'react';
import InfoCard from './InfoCard';
import lightbulb from '../assets/icons/idea.png';
import pencil from '../assets/icons/pencil.png';
import knowledge from '../assets/icons/knowledge.png';

const captions = ['Get Inspired', 'Start writing', 'Grow Your Skillset'];
const images = [lightbulb, pencil, knowledge];

const InfoCards = () => {
  return (
    <div className='container-full'>
      <div className='info-cards'>
        {captions.map((caption, i) => (
          <InfoCard img={images[i]} caption={caption} />
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
