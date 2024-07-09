import { useState } from "react";
import Child from "./child";
import Child2 from "./child2";

function Parent() {
  const [value, setValue] = useState("");
  const getClickedItem = (clickedItem) => {
    setValue(clickedItem);
    console.log("==> parent", value);
  };
  return (
    <>
      <Child
        getClickedItem={getClickedItem}
        list={["Golu", "Molu", "tolu", "Lolu"]}
      />
      <Child2 value={value} />
    </>
  );
}
export default Parent;
