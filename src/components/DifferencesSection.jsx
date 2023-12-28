import { differences } from "../data";
import Button from "../components/Button/Button";
import { useState } from "react";

export default function DifferencesSection() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <section>
      <h3>How we differ from others.</h3>

      <Button
        isActive={contentType === "way"}
        onClick={() => handleClick("way")}
      >
        Approach
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClick={() => handleClick("easy")}
      >
        Accessibility
      </Button>
      <Button
        isActive={contentType === "program"}
        onClick={() => handleClick("program")}
      >
        Concentration
      </Button>

      {!contentType && <p>Press the button</p>}
      {contentType && <p>{differences[contentType]}</p>}
    </section>
  );
}
