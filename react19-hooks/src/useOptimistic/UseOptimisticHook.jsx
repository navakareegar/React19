import React, { startTransition } from "react";
import { useOptimistic, useState } from "react";
import promiseFn from "../util";

function UseOptimisticHook() {
  const [comments, setComments] = useState([]);

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment) => {
      return [...state, newComment];
    }
  );

  function handleSubmit(e) {
    e.preventDefault();
    const text = e.target.comment.value;
    e.target.reset();

    const optimistic = {
      id: "temp-" + Date.now(),
      text,
      pending: true,
    };

    startTransition(async () => {
      addOptimisticComment(optimistic);
      try {
        const saved = await promiseFn(text);
        setComments((prev) => [...prev, saved]);
      } catch (err) {
        alert("error");
      }
    });
  }

  return (
    <div>
      <h2>Comments</h2>

      <form onSubmit={handleSubmit}>
        <input name="comment" placeholder="write a comment..." />
        <button>submit</button>
      </form>

      <ul>
        {optimisticComments.map((c) => (
          <li key={c.id}>
            {c.text} {c.pending && "⏳"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseOptimisticHook;
