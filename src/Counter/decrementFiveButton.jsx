import { CounterContext } from "./counterContext";
import { useContext } from "react";

export default function DecrementFiveButton() {
  const { setCounter } = useContext(CounterContext);
  return (
    <button
      style={{ margin: "10px" }}
      onClick={() => {
        {
          setCounter((prev) => prev - 5);
        }
      }}
    >
      Decrement -5
    </button>
  );
}
