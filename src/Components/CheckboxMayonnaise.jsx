import React from "react";

function CheckboxMayonnaise(props) {
  const { mayonnaise, dispatch } = props;

  const handleChange = () => {
    dispatch({ type: 'TOGGLE_MAYONNAISE' });
  };

  return (
    <div>
      <label>
        Майонез (+20 тугриков, +5 калорий):
        <input
          type="checkbox"
          checked={mayonnaise}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default CheckboxMayonnaise;