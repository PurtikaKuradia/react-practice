import { useState } from "react";

let nextId = 0;

export default function List() {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState([]);

  return (
    <>
      <h2>Inspiring Sculptors:</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtist([...artist, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {artist.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
