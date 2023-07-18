import React from 'react';
import Scramble from '../components/Scramble/Scramble';
import Timer from '../components/Timer/Timer';
import useTimerHooks from '../hooks/useTimerHooks';
import LeftPanel from '../components/LeftPanel/LeftPanel';
import CubeFace from '../components/CubeFace/CubeFace';

const Home = () => {
  const { time, formatTime, savedTimes, scrambleState, state } =
    useTimerHooks();

  return (
    <div className='container'>
      <LeftPanel values={savedTimes} />
      <div className='content'>
        <section className='centered-section'>
          <Scramble value={scrambleState} />
        </section>
        <section className='centered-section'>
          <Timer value={formatTime(time)} />
        </section>
        <section className='cube-section'>
          <div className='rubiks-cube'>
            <div className='up'>
              <CubeFace face='U' colors={state.U} />
            </div>
            <div className='lateral'>
              <CubeFace face='L' colors={state.L} />
              <CubeFace face='F' colors={state.F} />
              <CubeFace face='R' colors={state.R} />
              <CubeFace face='B' colors={state.B} />
            </div>
            <div className='dow'>
              <CubeFace face='D' colors={state.D} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default React.memo(Home);
