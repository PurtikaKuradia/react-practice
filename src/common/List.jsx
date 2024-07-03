import { useState } from "react";
import Loader from "./Loader";
import "./list.css";
import { useNavigate } from "react-router-dom";

const List = ({ loading, columns, data, isPathRouting, route }) => {
  const [clickedRow, setClickedRow] = useState(undefined);
  const navigate = useNavigate();

  return (
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
          {data.map((e) => (
            <tr
              onClick={() => {
                if (isPathRouting) {
                  navigate(`/${route}/${e.id}`);
                } else {
                  navigate(`/${route}`, { state: { id: e.id } });
                }
                setClickedRow(e);
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
  );
};
export default List;
