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
          <option value="small">Маленький</option>
          <option value="large">Большой</option>
        </select>
      </label>
    </div>
  );
}

export default SizeSelector;