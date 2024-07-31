import { useState } from "react";
import DetailChild from "./detailChild";
import DetailList from "./detailList";

const DetailListParent = () => {
  const [clickedItem, setClickedItem] = useState(undefined);
  const getClickedItem = (i) => {
    setClickedItem(i);
    console.log("==> parent", clickedItem);
  };

  return (
    <div style={{ height: " 500px" }}>
      <div style={{ height: "250px", overflow: "hidden" }}>
        <DetailList getClickedItem={getClickedItem} />
      </div>
      <div style={{ height: "250px" }}>
        {clickedItem ? (
          <DetailChild id={clickedItem.id} />
        ) : (
          <div style={{ height: "250px" }}>Nothing selected</div>
        )}
      </div>
    </div>
  );
};
export default DetailListParent;
