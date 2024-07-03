import { useState, useEffect } from "react";

export default function Test() {
  const [value, setValue] = useState(0);
  const [operation, setOperation] = useState("");

  const handleIncrease = () => {
    setOperation("+");
  };
  const handleDecrease = () => {
    setOperation("-");
  };

  useEffect(() => {
    console.log("mounting");
  }, []);

  useEffect(() => {
    if (operation === "+") {
      setValue(value + 1);
      setOperation("");
    }
    if (operation === "-") {
      setValue(value - 1);
      setOperation("");
    }
    console.log("mounting and updating");
  }, [operation, value]);

  useEffect(() => {
    console.log("mounting and updating");
  });

  useEffect(() => {
    return () => console.log("unMounting");
  }, []);
  return (
    <>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <h1>{value}</h1>
    </>
  );
}
