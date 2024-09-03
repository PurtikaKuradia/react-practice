import { useState } from "react";
import { CounterContext } from "./counterContext";
import Display from "./display";
import DecrementButton from "./decrementButton";
import IncrementButton from "./incrementButton";
import IncrementFiveButton from "./incrementFiveButton";
import DecrementFiveButton from "./decrementFiveButton";

export default function () {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      <Display />
      <IncrementButton />
      <DecrementButton />
      <IncrementFiveButton />
      <DecrementFiveButton />
    </CounterContext.Provider>
  );
}
