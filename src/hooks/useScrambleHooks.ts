import { useEffect, useState } from 'react';
import { MOVES } from '../utils/Constants';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [scrambleState, setScrambleState] = useState('');

  // Function to generate a random integer between min (inclusive) and max (inclusive)
  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Array of available MOVES

  // Generate a random scramble
  const generateScramble = () => {
    let scramble = [];
    let previousMove = '';

    // Perform 20 random MOVES to create the scramble
    for (let i = 0; i < 20; i++) {
      // Choose a random move that is not the same as the previous move
      let move = MOVES[getRandomInt(0, MOVES.length - 1)];

      // Check if we should add a prime or double notation
      let notation = getRandomInt(0, 2);
      if (notation === 1) {
        move += "'";
      } else if (notation === 2) {
        move += '2';
      }

      // Prevent consecutive MOVES of the same face and direction
      while (move.charAt(0) === previousMove.charAt(0)) {
        move = MOVES[getRandomInt(0, MOVES.length - 1)];
        notation = getRandomInt(0, 2);
        if (notation === 1) {
          move += "'";
        } else if (notation === 2) {
          move += '2';
        }
      }

      // Append the move to the scramble
      scramble.push(move);

      // Update the previous move
      previousMove = move;
    }

    return scramble.join(' ');
  };

  const createScramble = () => {
    setScrambleState(generateScramble());
  };

  useEffect(() => {
    createScramble();
  }, []);

  return { generateScramble, scrambleState };
};
