import { useState } from "react";

const Square = () => {
  const [side, setSide] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    setShow(true);
  };
  return (
    <>
      <input
        value={side}
        placeholder="Enter side"
        onChange={(e) => setSide(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {show && <div>Area: {side * side}</div>}
      {show && <div>Circumference: {4 * side}</div>}
    </>
  );
};
export default Square;
