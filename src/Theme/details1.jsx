import { useContext } from "react";
import { LanguageContext } from "./languageContext";

export default function Details1() {
  const { language } = useContext(LanguageContext);
  const english = [
    {
      id: "01",
      name: { label: "name", value: "Purtika" },
      age: { label: "age", value: 30 },
    },
    {
      id: "02",
      name: { label: "name", value: "Manoj" },
      age: { label: "age", value: 31 },
    },
  ];
  const hindi = [
    {
      id: "01",
      name: { label: "नाम", value: "पुर्तिका" },
      age: { label: "आयु", value: 30 },
    },
    {
      id: "02",
      name: { label: "नाम", value: "मनोज" },
      age: { label: "आयु", value: 31 },
    },
  ];
  const bio = language === "english" ? english : hindi;

  return (
    <>
      {bio.map((list) => (
        <div key={list.id}>
          <p>
            <label>{list.name.label} : </label>
            <label style={{ marginLeft: "20px" }}>{list.name.value}</label>
          </p>
          <p>
            <label>{list.age.label} : </label>
            <label style={{ marginLeft: "20px" }}>{list.age.value}</label>
          </p>
        </div>
      ))}
    </>
  );
}
