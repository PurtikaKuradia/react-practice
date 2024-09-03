import { useContext, useState } from "react";
import { FormDataContext } from "./formDataContext";

export default function FormData() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState();
  const { list, setList } = useContext(FormDataContext);
  return (
    <>
      <div>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Age
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Sex
          <input
            type="radio"
            value="MALE"
            checked={gender === "Male"}
            name="gender"
            onClick={() => setGender("Male")}
          />{" "}
          Male
          <input
            type="radio"
            value="FEMALE"
            checked={gender === "Female"}
            name="gender"
            onClick={() => setGender("Female")}
          />{" "}
          Female
        </label>
      </div>
      <button
        onClick={() => {
          setList([...list, { name, age, gender }]);
        }}
      >
        Submit
      </button>
    </>
  );
}
