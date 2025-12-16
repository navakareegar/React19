import { useActionState } from "react";
import promiseFn from "../util";

function UseActionStateHook() {
  const [state, formAction, isPending] = useActionState(submitAction, {
    success: false,
    data: null,
    error: null,
  });

  async function submitAction(prevState, formData) {
    const text = formData.get("comment");

    try {
      const result = await promiseFn(text);
      return { success: true, data: result, error: null };
    } catch (err) {
      return { success: false, data: null, error: err.message };
    }
  }
  return (
    <form action={formAction}>
      <input name="comment" />
      <button disabled={isPending}>
        {isPending ? "sending..." : "submit"}
      </button>
      {state.data && <p style={{ color: "blue" }}>{state.data.text}</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state.success && <p style={{ color: "green" }}>comment submitted! ✅</p>}
    </form>
  );
}

export default UseActionStateHook;
