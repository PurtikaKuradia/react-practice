import "./calculator.css";

export default function Display({ num1 }) {
  return (
    <>
      <div id="border">
        <input
          placeholder="Enter Value"
          className="input-box"
          value={num1}
          readOnly
        />
      </div>
    </>
  );
}
