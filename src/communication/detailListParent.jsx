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
    <>
      <div>
        <DetailList getClickedItem={getClickedItem} />
      </div>
      <div>
        {clickedItem ? (
          <DetailChild id={clickedItem.id} />
        ) : (
          <div>Nothing selected</div>
        )}
      </div>
    </>
  );
};
export default DetailListParent;
