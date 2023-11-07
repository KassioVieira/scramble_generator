import React from 'react';
import RubiksCubeIcon from '../components/RubiksCubeIcon/RubiksCubeIcon';
import useInvertedHooks from '../hooks/useInvertHooks';

const Invert = () => {
  const { invertedScramble, invertScramble, value, handleChange } =
    useInvertedHooks();

  return (
    <div className='logo-component'>
      <div className='center-invert'>
        <div className='center-icon'>
          <RubiksCubeIcon />
        </div>
        <h1 className='scramble'>
          Insira aqui o algorítimo para ser invertido
        </h1>
        <input
          type='text'
          className='input-box'
          onChange={handleChange}
        ></input>
        <button className='button-reverse' onClick={invertScramble}>
          reverse
        </button>

        {invertedScramble && (
          <span className='reverted-scramble'>{invertedScramble}</span>
        )}
      </div>
    </div>
  );
};

export default Invert;
