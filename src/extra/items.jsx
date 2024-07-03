import { useState } from "react";

export default function Items() {
  const [listItems, setListItems] = useState("");
  const [list, setList] = useState([]);

  function handleListItems(e) {
    setListItems(e.target.value);
  }
  const handleAdd = () => {
    console.log(listItems);
    setList([
      ...list,
      { id: `id-${Math.random().toString(16).slice(2)}`, value: listItems },
    ]);
  };
  //   const newList = list;
  //   newList.push(listItems);
  //   setList(newList);
  console.log("==> list", list);

  const handleDelete = (item) => {
    const newArray = list.filter((l) => l.id !== item.id);
    setList(newArray);
  };
  return (
    <div>
      <label style={{ padding: 20 }}>
        Enter List Items:
        <input type="text" value={listItems} onChange={handleListItems} />
      </label>
      <button
        onClick={() => {
          handleAdd();
          setListItems("");
        }}
      >
        Add
      </button>
      <ol>
        {list.map((l) => (
          <li style={{ textAlign: "left" }} key={l.id}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <input placeholder="test" />
              <div>{l.value}</div>
              <button
                style={{ margin: "10px 0px" }}
                onClick={() => handleDelete(l)}
              >
                Delete
              </button>
              {/* <button onClick={handleEdit(id)} >Edit</button> */}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
