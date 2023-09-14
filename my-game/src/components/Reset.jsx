import React from 'react';

export const ResetButton = ({ resetBoard, restart }) => {
  return (
    <div className='btn-group'>
      <button className="reset-btn" onClick={resetBoard}>Reset</button>
      <button className="restart-btn" onClick={restart}>Restart</button>
    </div>
  );
};
