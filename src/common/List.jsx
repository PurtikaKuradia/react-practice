import { useState } from "react";
import Loader from "./Loader";
import "./list.css";

const List = ({ loading, columns, data, getClickedItem, style }) => {
  const [clickedRow, setClickedRow] = useState(undefined);

  return (
    <div style={style}>
      <Loader loading={loading}>
        <table style={{ border: "1px solid", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {columns.map((column) => {
                return <th style={{ border: "1px solid" }}>{column.header}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data?.map((e) => (
              <tr
                onClick={() => {
                  setClickedRow(e);
                  getClickedItem(e);
                }}
                style={{
                  border: "solid thin",
                  background: clickedRow?.id === e.id ? "blue" : "white",
                }}
              >
                {columns.map((column) => {
                  return (
                    <td style={{ border: "1px solid" }}>{e[column.access]}</td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </Loader>
    </div>
  );
};
export default List;
