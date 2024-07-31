import { useContext } from "react";
import Details from "./details";
import Details1 from "./details1";
import { ThemeContext } from "./themeContext";
import { Button } from "./button";

export const Wrapper = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={
        theme !== "light"
          ? {
              background: "black",
              color: "white",
              height: "100%",
              width: "100%",
            }
          : {
              background: "white",
              color: "black",
              height: "100%",
              width: "100%",
            }
      }
    >
      <Details />
      <Details1 />
      <Button />
    </div>
  );
};
