import { use } from "react";
import { Suspense } from "react";

function UseHook() {
  const data = use(promiseFn);

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <div>
        <h2>User Info</h2>
        <p>Text: {data.text}</p>
      </div>
    </Suspense>
  );
}

export default UseHook;
