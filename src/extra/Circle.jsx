import { useState } from "react";

const Circle = () => {
  const [radius, setRadius] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    setShow(true);
  };
  return (
    <>
      <input
        value={radius}
        placeholder="Enter radius"
        onChange={(e) => setRadius(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {show && <div>Area: {Math.PI * radius * radius}</div>}
      {show && <div>Circumference: {Math.PI * 2 * radius}</div>}
      {show && <div>Diameter: {2 * radius}</div>}
    </>
  );
};
export default Circle;
