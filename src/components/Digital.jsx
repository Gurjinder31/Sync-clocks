import React from 'react';

import '../style/digital.css';

const Digital = ({ currentTime }) => {
  return (
    <>
      <div className='Clock'>
        <h3 id='time'>{currentTime.toLocaleTimeString()}</h3>
      </div>
    </>
  );
};

export default Digital;
