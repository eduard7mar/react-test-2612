import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("help");

  function handleNameChange(event) {
    setName(event.target.value);
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
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Reason for inquiry</label>
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        >
          <option value="error">Error</option>
          <option value="help">Need help</option>
          <option value="suggest">Cooperation proposal</option>
        </select>

        <Button>Send</Button>
      </form>
    </section>
  );
}
