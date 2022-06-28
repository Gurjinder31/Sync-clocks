import React, { useContext, useEffect, useState } from 'react';

import Analog from './Analog';
import Digital from './Digital';
import '../style/App.css';

import { stateContext } from '../context/StateProvider';

const App = () => {
  const {
    globalState: { currentTime },
    dispatch,
  } = useContext(stateContext);

  const [customTime, setCustomTime] = useState();
  const [toggle, setToggle] = useState(false);

  const setCurrentTime = () => {
    if (toggle) {
      dispatch({
        type: 'UPDATED_TIME',
        payload: {
          currentTime: new Date(
            customTime.setSeconds(customTime.getSeconds() + 1)
          ),
        },
      });
    }
    if (!toggle) {
      dispatch({
        type: 'ELAPSED_TIME',
        payload: {
          currentTime: new Date(),
        },
      });
    }
  };

  const UpdateTime = (evt) => {
    setToggle(true);
    evt.preventDefault();
    dispatch({
      type: 'UPDATED_TIME',
      payload: {
        currentTime: customTime,
      },
    });
  };

  const resetTimetoCurrent = (evt) => {
    setToggle(false);
    dispatch({
      type: 'ELAPSED_TIME',
      payload: {
        currentTime: new Date(),
      },
    });
  };

  useEffect(() => {
    let interval = setInterval(() => setCurrentTime(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [customTime, toggle]);

  return (
    <>
      <div className='app-header'>
        <h1>Synchronies Digital & Analog Clocks</h1>
        <button onClick={resetTimetoCurrent} type='button'>
          Reset time
        </button>
      </div>
      <div className='app-clocks'>
        <div className='digital'>
          <Digital currentTime={currentTime} />
        </div>
        <div className='analog'>
          <Analog currentTime={currentTime} />
        </div>
      </div>

      <div className='time-input'>
        <input
          onChange={(e) => {
            var text = e.target.value;
            var arr = text.split(':');
            var updatedTime = new Date(new Date().setHours(arr[0], arr[1]));
            setCustomTime(updatedTime);
          }}
          // value={customTime.toLocaleTimeString()}
          type='time'
          min='09:00'
          max='18:00'
        />
        <button onClick={UpdateTime} type='submit'>
          Submit
        </button>
      </div>
    </>
  );
};

export default App;
