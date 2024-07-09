import { useState } from "react";
import Panel from "./panel";

const Uplifting = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div
        style={{
          border: "1px, solid, black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "500px",
          height: "300px",
        }}
      >
        <Panel
          title="About"
          isActive={activeIndex === 0}
          onShow={() => {
            setActiveIndex(0);
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Panel>
        <Panel
          title="Lorem Ipsum"
          isActive={activeIndex === 1}
          onShow={() => {
            setActiveIndex(1);
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Panel>
      </div>
    </>
  );
};
export default Uplifting;
