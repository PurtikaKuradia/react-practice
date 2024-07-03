import "./calculator.css";

export default function MyDisplay({ num1 }) {
  return (
    <>
      <p id="border">
        <div>
          <input value={num1} placeholder="Enter first number" readOnly />
        </div>
      </p>
    </>
  );
}
