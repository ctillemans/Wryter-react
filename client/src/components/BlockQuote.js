import React from 'react';

const BlockQuote = ({ quote }) => {
  return (
    <div className='quote-container container'>
      <div className='quote'>
        <div className='quote__quote'>
          <span className='oversized-punc'>"</span>
          {quote}
          <span className='oversized-punc'>"</span>
        </div>
      </div>
    </div>
  );
};

export default BlockQuote;
