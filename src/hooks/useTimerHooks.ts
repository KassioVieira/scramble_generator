import { useCallback, useEffect, useState } from 'react';
import useCubeLogicHooks from './useCubeLogicHooks';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [savedTimes, setSavedTimes] = useState<string[]>([]);
  const [lastDisplayedTime, setLastDisplayedTime] = useState(0);
  // const { createScramble } = useScrambleHooks();
  // const { state, move, resetCube } = useCubeHooks();
  const { state, createScramble, scrambleState, initialCubeState } =
    useCubeLogicHooks();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let interval: any = null;

    const handleKeyDown = (event: KeyboardEvent) => {
      setIsModalOpen(!isModalOpen);
      if (event.key === ' ' || event.key === 'Space') {
        if (running) {
          setRunning(false);
          const formattedTime = formatTime(time); // Format the last displayed time
          setLastDisplayedTime(time); // Update the last displayed time
          setSavedTimes(prevTimes => [...prevTimes, formattedTime]); // Save the formatted time to the list
          localStorage.setItem(
            'timerValues',
            JSON.stringify([...savedTimes, formattedTime])
          ); // Store in localStorage
          createScramble();
          setTime(0);
        } else {
          setRunning(true);
        }
      }
    };

    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => {
          const updatedTime = prevTime + 1;
          return updatedTime;
        });
      }, 10);
    } else {
      clearInterval(interval);
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [running, time]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor((time / 100) % 60);
    const centiseconds = time % 100;

    let timeString = '';

    if (minutes > 0) {
      timeString += `${minutes.toString().padStart(2, '0')}:`;
    }

    timeString += `${seconds.toString().padStart(2, '0')}.${centiseconds
      .toString()
      .padStart(2, '0')}`;

    return timeString.replace(',', '.');
  };

  useEffect(() => {
    const storedTimerValues = localStorage.getItem('timerValues');
    if (storedTimerValues) {
      setSavedTimes(JSON.parse(storedTimerValues));
    }
  }, []);

  useEffect(() => {
    if (state === initialCubeState) {
      createScramble();
    }
  }, []);

  const startInMobileDevices = () => {
    const spaceKeyDownEvent = new KeyboardEvent('keydown', {
      key: ' ',
      code: 'Space',
      which: 32,
      keyCode: 32,
      bubbles: true
    });

    document.dispatchEvent(spaceKeyDownEvent);
  };

  return {
    running,
    formatTime,
    time,
    savedTimes,
    scrambleState,
    state,
    startInMobileDevices,
    isModalOpen,
    lastDisplayedTime
  };
};
