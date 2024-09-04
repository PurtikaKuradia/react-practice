import { CounterContext } from "./counterContext";
import { useContext } from "react";

export default function IncrementFiveButton() {
  const { setCounter } = useContext(CounterContext);
  return (
    <button
      style={{ margin: "10px" }}
      onClick={() => {
        {
          setCounter((prev) => prev + 5);
        }
      }}
    >
      Increment +5
    </button>
  );
}
