import React from 'react';
import RubiksCubeIcon from '../components/RubiksCubeIcon/RubiksCubeIcon';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();

  return (
    <div className='logo-component'>
      <div className='center-invert'>
        <div className='center-icon'>
          <RubiksCubeIcon />
        </div>
        <h1 className='titleSite'>Braga ao Cubo</h1>
        <div className='row-square'>
          <div className='square' onClick={() => navigate('/timer')}>
            <div className='content'>
              <p style={{ fontSize: 22 }}>Timer</p>
            </div>
          </div>
          <div className='square' onClick={() => navigate('/invert')}>
            <div className='content'>
              <p style={{ fontSize: 22 }}>Invert algorithm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
