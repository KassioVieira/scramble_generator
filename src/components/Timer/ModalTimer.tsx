import React from 'react';

type ModalTimerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  resetTime: () => void;
};

const ModalTimer = ({
  isOpen,
  onClose,
  children,
  resetTime
}: ModalTimerProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='modal-overlay' onClick={resetTime}>
      <div className='modal-content'>
        <button className='modal-close' onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalTimer;
