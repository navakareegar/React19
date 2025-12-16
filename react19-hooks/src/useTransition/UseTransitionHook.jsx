import React from "react";

import { useState, useTransition } from "react";

function UseTransitionHook() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    const value = e.target.value;
    setText(value);

    startTransition(() => {
      const newList = Array.from({ length: 10000 }, (_, i) => value + i);
      setList(newList);
    });
  }

  return (
    <div>
      <input value={text} onChange={handleChange} placeholder="Type..." />
      {isPending && <p>Processing...</p>}
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseTransitionHook;
