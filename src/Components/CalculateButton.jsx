// import React from 'react';

// function CalculateButton({ handleCalculateClick }) {

//   return (
//     <button onClick={handleCalculateClick}>Calculate</button>
//   );
// }

// export default CalculateButton;

//Это мой текущий рабочий вариант 


import React from 'react';

function CalculateButton({ dispatch }) {
  const handleClick = () => {
    dispatch({ type: "CALCULATE" });
  };
  return <button onClick={handleClick}>Calculate</button>;
}

export default CalculateButton;
