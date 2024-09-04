import { useContext } from "react";
import { FormDataContext } from "./formDataContext";
import FormData from "./formData";

export default function Display() {
  const { list } = useContext(FormDataContext);
  let lastItem;
  [...list].map((item, index) => {
    if (index === list.length - 1) {
      lastItem = item;
    }
  });
  console.log("lastData", lastItem);
  return (
    <div>
      <FormData />
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {list.map((e) => {
          return (
            <tr>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.gender}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
