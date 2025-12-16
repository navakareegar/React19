import React from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();

  return (
    <div>
      <button type="submit" disabled={pending}>
        {pending ? "Sending..." : "Submit"}
      </button>

      <pre>
        {JSON.stringify(
          {
            pending,
            method,
            action,
            data: data?.get("comment"),
          },
          null,
          2
        )}
      </pre>
    </div>
  );
}

function UseFormStatusHook() {
  async function submitComment(formData) {
    await new Promise((r) => setTimeout(r, 3000));

    const comment = formData.get("comment");
    console.log("Saved comment:", comment);
  }

  return (
    <div>
      <h2>Add Comment</h2>

      <form action={submitComment}>
        <input name="comment" placeholder="Write your comment..." required />

        <SubmitButton />
      </form>
    </div>
  );
}

export default UseFormStatusHook;
