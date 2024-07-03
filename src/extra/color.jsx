import { useEffect, useState } from "react";

export default function Color() {
  const [pink, setPink] = useState({ count: 0, state: false });
  const [yellow, setYellow] = useState({ count: 0, state: false });
  const [green, setGreen] = useState({ count: 0, state: false });
  const [blue, setBlue] = useState({ count: 0, state: false });

  useEffect(() => {
    setPink((prev) => ({ ...prev, count: prev.count + 1 }));
  }, [pink.state]);

  useEffect(() => {
    setYellow((prev) => ({ ...prev, count: prev.count + 1 }));
  }, [yellow.state]);

  useEffect(() => {
    setGreen((prev) => ({ ...prev, count: prev.count + 1 }));
  }, [green.state]);

  useEffect(() => {
    setBlue((prev) => ({ ...prev, count: prev.count + 1 }));
  }, [blue.state]);

  console.log("color", pink, yellow, green, blue);

  return (
    <>
      <button
        style={{ margin: "10px 10px 10px 10px", backgroundColor: "pink" }}
        onClick={() => setPink((prev) => ({ ...prev, state: !prev.state }))}
      >
        Pink
      </button>
      <button
        style={{ margin: "10px 10px 10px 10px", backgroundColor: "yellow" }}
        onClick={() => setYellow((prev) => ({ ...prev, state: !prev.state }))}
      >
        Yellow
      </button>
      <button
        style={{ margin: "10px 10px 10px 10px", backgroundColor: "green" }}
        onClick={() => setGreen((prev) => ({ ...prev, state: !prev.state }))}
      >
        Green
      </button>
      <button
        style={{ margin: "10px 10px 10px 10px", backgroundColor: "blue" }}
        onClick={() => setBlue((prev) => ({ ...prev, state: !prev.state }))}
      >
        Blue
      </button>
      <p style={{ backgroundColor: "pink", width: "300px" }}>
        You have Change Pink color {pink.count} times
      </p>
      <p style={{ backgroundColor: "yellow", width: "300px" }}>
        You have Change Yellow color {yellow.count} times
      </p>
      <p style={{ backgroundColor: "green", width: "300px" }}>
        You have Change Green color {green.count} times
      </p>
      <p style={{ backgroundColor: "blue", width: "300px" }}>
        You have Change Blue color {blue.count} times
      </p>
    </>
  );
}
