import React, { useState } from "react";
import Circle from "../extra/Circle";
import Rectangle from "../extra/Rectangle";
import Square from "../extra/Square";
export default function Area() {
  const [show, setShow] = useState(1);
  return (
    <>
      <button onClick={() => setShow(1)}>Circle</button>
      <button onClick={() => setShow(2)}>Rectangle</button>
      <button onClick={() => setShow(3)}>Square</button>
      <div>
        {show === 1 && <Circle />}
        {show === 2 && <Rectangle />}
        {show === 3 && <Square />}
      </div>
    </>
  );
}
