import "./calculator.css";
import { useState } from "react";
import MyButton from "./MyButtons";
import MyDisplay from "./MyDisplay";

export default function MyCalculator() {
  const [clickedButton, setClickedButton] = useState("");

  const handleClick = (value) => {
    switch (value) {
      case 7: {
        setClickedButton(value);
      }
      case 8: {
        setClickedButton(value);
      }
      case 9: {
        setClickedButton(value);
      }
      case "*": {
        setClickedButton(value);
      }
      case "=": {
        console.log("==> clicked equals", value);
      }
    }
  };

  return (
    <>
      <MyDisplay num1={clickedButton} />
      <MyButton onClick={handleClick} />
    </>
  );
}
