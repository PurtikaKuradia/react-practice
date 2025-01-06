import { useState } from "react";
import data from "./data";

export const Card = ({ isOpen, data, toggle }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "70vw",
      }}
    >
      <div
        style={{
          background: isOpen ? "rgb(247 238 238)" : "",
          cursor: isOpen ? "not-allowed" : "pointer",
        }}
        onClick={() => {
          toggle(data);
        }}
      >
        <h3>
          {data.question} <span style={{ margin: 30 }}>+</span>
        </h3>
      </div>
      {isOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "70vw",
            background: "rgb(247 238 238)",
          }}
        >
          {data.answer}
        </div>
      )}
    </div>
  );
};
export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [initalState, setState] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  function handleSingleClick(getId) {
    setSelected(getId === selected ? null : getId);
  }
  console.log("initalState", initalState);
  return (
    <div>
      <div>
        <p style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
          Accordion
        </p>
        {data && data.length > 0 ? (
          data.map((e) => (
            <Card
              data={e}
              isOpen={initalState[e.id]}
              toggle={(d) => {
                setState(
                  Object.keys(initalState).reduce((acc, curr) => {
                    acc[curr] = d.id === curr;
                    return acc;
                  }, {})
                );
              }}
            />
          ))
        ) : (
          <div> No data found !</div>
        )}
      </div>
    </div>
  );
}
