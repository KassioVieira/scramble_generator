import React from 'react';
import Scramble from '../components/Scramble/Scramble';
import useScrambleHooks from '../hooks/useScrambleHooks';
import Timer from '../components/Timer/Timer';
import useTimerHooks from '../hooks/useTimerHooks';
import LeftPanel from '../components/LeftPanel/LeftPanel';

const Home = () => {
  const { scrambleState } = useScrambleHooks();
  const { time, formatTime } = useTimerHooks();

  return (
    <div className='container'>
      <LeftPanel />
      <div className='content'>
        <section className='centered-section'>
          <Scramble value={scrambleState} />
        </section>
        <section className='centered-section'>
          <Timer value={formatTime(time)} />
        </section>
      </div>
    </div>
  );
};

export default Home;
