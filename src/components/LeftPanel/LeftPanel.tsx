import React, { useState } from 'react';
import { TimerType } from '../../types/TimerTypes';

const LeftPanel = () => {
  const [timers, setTimers] = useState<Array<TimerType>>([
    {
      value: '00:30:01'
    },
    {
      value: '00:31:02'
    },
    {
      value: '00:33:02'
    },
    {
      value: '00:34:21'
    }
  ]);

  return (
    <div className='left-sidebar'>
      <div className='pageTitle'>Rubik's Cube Timer</div>
      <div className='row'>
        <h2 className='list'>Id</h2>
        <h2 className='list'>Tempo</h2>
      </div>
      <ul className='timers'>
        {timers.map((timer, index) => (
          <li key={`timer-${index}`} className='list'>
            {index + 1}: {timer.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftPanel;
