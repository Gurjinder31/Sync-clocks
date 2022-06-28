import React from 'react';

import '../style/digital.css';

const Digital = ({ currentTime }) => {
  return (
    <>
      <div className='clock'>
        <h3 data-testid='timeValue'>{currentTime.toLocaleTimeString()}</h3>
      </div>
    </>
  );
};

export default Digital;
