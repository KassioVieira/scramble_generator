import React from 'react';
import { ScrambleType } from '../../types/ScrambleType';
import RubiksCubeIcon from '../RubiksCubeIcon/RubiksCubeIcon';

const Scramble = ({ value }: ScrambleType) => {
  return (
    <div className='scrambleBox'>
      <RubiksCubeIcon />
      <h1 className='scramble'>Scramble 3x3</h1>
      <h2 className='scramble'>{value}</h2>
    </div>
  );
};

export default React.memo(Scramble);
