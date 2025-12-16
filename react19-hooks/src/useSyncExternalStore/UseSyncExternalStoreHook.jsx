import { useSyncExternalStore } from "react";

// store.js
let count = 0;
let listeners = new Set();

export function increment() {
  count++;
  listeners.forEach((l) => l());
}

export function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getSnapshot() {
  return count;
}

function UseSyncExternalStoreHook() {
  const count = useSyncExternalStore(subscribe, getSnapshot);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default UseSyncExternalStoreHook;
