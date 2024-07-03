import "./calculator.css";
import { useState } from "react";
import Button from "./button";
import Display from "../../extra/Display";

const getResult = (operator, num1, num2) => {
  switch (operator) {
    case "*":
      return num1 * num2;
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    default:
      return " ";
  }
};

export default function Calculator() {
  const [clicked, setClicked] = useState("");

  const handleClick = (value) => {
    switch (value) {
      case "+": {
        setClicked((prev) => `${prev} ${value} `);
        break;
      }
      case "-": {
        setClicked((prev) => `${prev} ${value} `);
        break;
      }
      case "*": {
        setClicked((prev) => `${prev} ${value} `);
        break;
      }
      case "/": {
        setClicked((prev) => `${prev} ${value} `);
        break;
      }
      case "=": {
        console.log(clicked);

        const values = clicked.split(" ");
        const result = getResult(values[1], values[0], values[2]);
        setClicked(result);
        break;
      }
      default:
        setClicked((prev) => `${prev}${value}`);
        break;
    }
  };

  return (
    <>
      <Display num1={clicked} />
      <Button onClick={handleClick} />
    </>
  );
}
