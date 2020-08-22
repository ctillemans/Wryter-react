import React, { useState, useEffect } from 'react';

const WryterBox = () => {
  const [wordCount, setWordCount] = useState(0);
  const updateWordCount = (e) => {
    let s = e.target.value;
    s = s.replace(/'/g, '');
    setWordCount(/(\w+)/g.test(s) ? s.match(/\w+/g).length : 0);
  };
  return (
    <div className='wryterbox'>
      <div className='wryterbox__dashboard dashboard'>
        <div className='dashboard__wordcount'>word count: {wordCount}</div>
      </div>
      <textarea
        className='wryterbox__text'
        name='wryterbox__text'
        id=''
        rows='10'
        cols='30'
        placeholder='There is nothing worse than a blank page...'
        onKeyUp={updateWordCount}
        // functions for debouncing onchange event
        // onkeyDown clearTimeout()
        // onKeyUp clearTimeOut() and start timer
      ></textarea>
    </div>
  );
};

export default WryterBox;
