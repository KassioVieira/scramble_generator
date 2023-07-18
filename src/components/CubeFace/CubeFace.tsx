import React from 'react';
import { FaceType } from '../../types/FaceType';
import { ColorType } from '../../types/ColorType';

interface CubeFaceProps {
  face: FaceType;
  colors: ColorType[][];
}

const CubeFace: React.FC<CubeFaceProps> = ({ face, colors }) => {
  return (
    <div className='cube-face'>
      {colors.map((row, rowIndex) => (
        <div className='cube-row' key={rowIndex}>
          {row.map((color, colIndex) => (
            <div
              className='cube-cell'
              key={colIndex}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default React.memo(CubeFace);
