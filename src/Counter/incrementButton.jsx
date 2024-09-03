import { CounterContext } from "./counterContext";
import { useContext } from "react";

export default function IncrementButton() {
  const { setCounter } = useContext(CounterContext);
  return (
    <button
      style={{ margin: "10px" }}
      onClick={() => {
        {
          setCounter((prev) => prev + 1);
        }
      }}
    >
      Increment
    </button>
  );
}
