import { useState } from "react";
import Items from "./items";

export default function ToDoList() {
  return (
    <div
      style={{
        borderBlockColor: "green",
        backgroundColor: "beige",
      }}
    >
      <h2 style={{ color: "blue" }}>My To Do List</h2>
      <Items />
    </div>
  );
}
