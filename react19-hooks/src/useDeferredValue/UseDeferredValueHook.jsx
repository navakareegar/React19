import { useState, useDeferredValue } from "react";

const items = Array.from({ length: 30000 }, (_, i) => `Item ${i}`);

function UseDeferredValueHook() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredQuery.toLowerCase())
  );

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type fast..."
      />

      {query !== deferredQuery && <p>Loading...</p>}

      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseDeferredValueHook;
