import { useState } from "react";

const Rectangle = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    setShow(true);
  };
  return (
    <>
      <input
        value={length}
        placeholder="Enter length"
        onChange={(e) => setLength(e.target.value)}
      />
      <input
        value={width}
        placeholder="Enter width"
        onChange={(e) => setWidth(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {show && <div>Area: {length * width}</div>}
      {show && <div>Circumference: {2 * (Number(length) + Number(width))}</div>}
    </>
  );
};
export default Rectangle;
