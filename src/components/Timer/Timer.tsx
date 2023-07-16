import React from 'react';
import { TimerType } from '../../types/TimerTypes';

const Timer = ({ value }: TimerType) => {
  return (
    <div>
      <h2 className='time'>{value}</h2>
    </div>
  );
};

export default Timer;
