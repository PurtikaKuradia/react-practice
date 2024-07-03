import React from "react";

const Button = ({ onClick }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ["+", "-", "*", "/"];
  return (
    <div className="button-wrapper">
      <div className="number-wrapper">
        {numbers.map((number) => (
          <button
            className={`each-button button${number}`}
            onClick={() => onClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="operator-wrapper">
        {operators.map((operator) => (
          <button
            className={`each-operator operator${operator}`}
            onClick={() => onClick(operator)}
          >
            {operator}
          </button>
        ))}
      </div>
      <button onClick={() => onClick("=")}>=</button>
    </div>
  );
};

export default Button;
