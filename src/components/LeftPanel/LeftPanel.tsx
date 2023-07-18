import React from 'react';
import { TimerType } from '../../types/TimerTypes';

type LeftPanelProps = {
  values: Array<string>;
};

const LeftPanel = ({ values }: LeftPanelProps) => {
  return (
    <div className='left-sidebar'>
      <div className='pageTitle'>Rubik's Cube Timer</div>
      <div className='row'>
        <h2 className='column'>Tempos</h2>
      </div>
      <ul className='timers'>
        {values.map((timer, index) => (
          <li key={`timer-${index}`} className='row'>
            <span className='column'>{index + 1}</span>
            <span className='columntimer'>{timer}</span>
          </li>
        ))}
      </ul>
      {values.length === 0 && (
        <div className='notTimers'>seus tempos aparecerão aqui</div>
      )}
    </div>
  );
};

export default React.memo(LeftPanel);
