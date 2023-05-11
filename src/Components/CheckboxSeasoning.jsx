import React from "react";

function CheckboxSeasoning(props) {
  const { seasoning, dispatch } = props;

  const handleChange = () => {
    dispatch({ type: 'TOGGLE_SEASONING' });
  };

  return (
    <div>
      <label>
        Приправа (+15 рублей, +5 калорий):
        <input
          type="checkbox"
          checked={seasoning}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default CheckboxSeasoning;