import React from "react";

function SizeSelector(props) {
  const { size, dispatch } = props;

  const handleChange = (event) => {
    const newSize = event.target.value;
    dispatch({ type: 'SET_SIZE', payload: newSize });
  };

  return (
    <div>
      <label>
        Выберите размер:
        <select value={size} onChange={handleChange}>
          <option>Выберите размер</option>
          <option value="small">Маленький (50 тугриків, 20 калорій) </option>
          <option value="large">Большой (100 тугриків, 40 калорій)</option>
        </select>
      </label>
    </div>
  );
}

export default SizeSelector;