import React from "react";

function Summary(props) {
  return (
    <div>
      <p>Price: {props.state.cost}$</p>
      <p>Calories: {props.state.calories}</p>
    </div>
  );
}

export default Summary;