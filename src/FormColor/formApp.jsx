import { useState } from "react";
import { FormDataContext } from "./formDataContext";
import Display from "./display";

export default function FormApp() {
  const [list, setList] = useState([]);
  console.log("==> list", list);

  return (
    <FormDataContext.Provider value={{ list, setList }}>
      <Display />
    </FormDataContext.Provider>
  );
}
