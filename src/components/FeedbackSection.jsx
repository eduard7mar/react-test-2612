import { useState } from "react";
import Button from "./Button/Button";

function StateVsRef() {
  return(
    <div>
      <h3>Input value</h3>
      <input type="text"/>
    </div>
  )
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: true,
    reason: "help",
  });
  // const [name, setName] = useState("");
  // const [hasError, setHasError] = useState(false);
  // const [reason, setReason] = useState("help");

  function handleNameChange(event) {
    // setName(event.target.value);
    // setHasError(event.target.value.trim().length === 0)
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
  }

  return (
    <section>
      <h3>Feedback</h3>

      <form action="">
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Reason for inquiry</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value="error">Error</option>
          <option value="help">Need help</option>
          <option value="suggest">Cooperation proposal</option>
        </select>

        <Button disabled={form.hasError} isActive={!form.hasError}>
          Send
        </Button>

        <StateVsRef />
      </form>
    </section>
  );
}
