import { useState } from "react";
const Counter = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  return (
    <>
      <div>
        <label>Enter first number </label>
        <input
          value={value1}
          placeholder="type here"
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>
      <div>
        <label>Enter second number </label>
        <input value={value2} onChange={(e) => setValue2(e.target.value)} />
      </div>
      <div>first number {value1}</div>
      <div>second number {value2}</div>
    </>
  );
};
export default Counter;
