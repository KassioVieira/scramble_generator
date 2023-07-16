import { useEffect, useState } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval: any = null;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ' ' || event.key === 'Space') {
        setRunning(prevRunning => !prevRunning);
      }
    };

    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 10);
    } else {
      clearInterval(interval);
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [running]);

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
    setTime(0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor((time / 100) % 60);
    const centiseconds = time % 100;

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
  };

  return { handleStart, handleStop, running, formatTime, time };
};
