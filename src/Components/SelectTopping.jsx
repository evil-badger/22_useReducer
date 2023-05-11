import React from "react";

function SelectTopping(props) {
  const { state, dispatch } = props;

  const handleChange = (event) => {
    const topping = event.target.value;
    dispatch({ type: 'SET_TOPPING', payload: topping });
  };

  return (
    <div className="SelectTopping">
      <label>
        Выберите начинку:
        <select value={state.topping} onChange={handleChange}>
          <option>Выберите размер</option>
          <option value="cheese">Сыр(+ 10 тугриків, + 20 калорій)</option>
          <option value="salad">Салат(+ 20 тугриків, + 5 калорій)</option>
          <option value="potato">Картошка(+ 15 тугриків, + 10 калорій)</option>
        </select>
      </label>
    </div>
  );
}

export default SelectTopping;