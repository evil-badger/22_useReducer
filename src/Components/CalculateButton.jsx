import React from 'react';

function CalculateButton({ handleCalculateClick }) {

  return (
    <button onClick={handleCalculateClick}>Calculate</button>
  );
}

export default CalculateButton;