import React, { useState } from "react";

export default function Name(props) {
  const [name, setName] = useState([]);

  return (
    <div>
      <h1>My Name IS {name}</h1>

      <button
        onClick={() => {
          setName(props.name);
        }}
      >
        click
      </button>
    </div>
  );
}
