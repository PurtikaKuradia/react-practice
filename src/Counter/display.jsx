import { useContext } from "react";
import { CounterContext } from "./counterContext";

export default function () {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
}
