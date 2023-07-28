import React from 'react';
import { FaceType } from '../../types/FaceType';
import { ColorType } from '../../types/ColorType';
import { COLORS } from '../../utils/Constants';

interface CubeFaceProps {
  face: FaceType;
  colors: ColorType[][];
}

const COLORS_MAP = new Map<string, string>([
  ['green', COLORS.green],
  ['blue', COLORS.blue],
  ['orange', COLORS.orange],
  ['red', COLORS.red],
  ['yellow', COLORS.yellow],
  ['white', COLORS.white]
]);

const CubeFace: React.FC<CubeFaceProps> = ({ face, colors }) => {
  return (
    <div className='cube-face'>
      {colors.map((row, rowIndex) => (
        <div className='cube-row' key={rowIndex}>
          {row.map((color, colIndex) => (
            <div
              className='cube-cell'
              key={colIndex}
              style={{ backgroundColor: COLORS_MAP.get(color) }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default React.memo(CubeFace);
