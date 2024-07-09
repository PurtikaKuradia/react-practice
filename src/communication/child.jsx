import { useState } from "react";

const Child = ({ list, getClickedItem }) => {
  const [clickedItem, setClickedItem] = useState("");
  console.log("clicked Item", clickedItem);
  return list.map((l) => (
    <div
      onClick={() => {
        setClickedItem(l);
        getClickedItem(l);
      }}
    >
      {l}
    </div>
  ));
};
export default Child;
