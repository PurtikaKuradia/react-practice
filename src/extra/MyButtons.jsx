import React from "react";

const MyButtons = ({ onClick }) => {
  return (
    <>
      <button onClick={() => onClick(7)}>7</button>
      <button onClick={() => onClick(8)}>8</button>
      <button onClick={() => onClick(9)}>9</button>

      <button onClick={() => onClick("=")}>=</button>
    </>
  );
};

export default MyButtons;
