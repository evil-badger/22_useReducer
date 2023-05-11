import React from 'react';

function CalculateButton({ dispatch }) {
  const handleClick = () => {
    dispatch({ type: "CALCULATE" });
  };
  return <button onClick={handleClick}>Calculate</button>;
}

export default CalculateButton;
