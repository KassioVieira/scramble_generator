import { useState } from 'react';

export default function useInvertedHooks() {
  const [value, setValue] = useState('');
  const [invertedScramble, setInvertedScramble] = useState('');
  const [notValid, setNotValid] = useState(false);

  const invertScramble = () => {
    if (!isCuboAlgorithmValid(value)) {
      setNotValid(true);
      setInvertedScramble('Este algorítimo não é válido');
      setValue('');
      return;
    }

    const moves = value.split(' ');

    const originalReverse = moves.reverse();

    const reverseMovements = originalReverse.map(move => {
      if (move.endsWith("'")) {
        return move.slice(0, -1);
      } else if (move.endsWith('2')) {
        return move;
      } else {
        return move + "'";
      }
    });

    const invertedAlgorithm = reverseMovements.join(' ');

    setInvertedScramble(invertedAlgorithm);
  };

  function isCuboAlgorithmValid(value: string) {
    const regex = /^[RLUDFBrludfbxzy'2\s]+$/;

    return regex.test(value);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    invertedScramble,
    invertScramble,
    value,
    handleChange,
    notValid
  };
}
