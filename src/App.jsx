import Header from "./components/Header";
import { ways, differences } from "./data";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { useState } from "react";

export default function App() {
  const [content, setContent] = useState("Click the button");

  function handleClick(type) {
    setContent(type);
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Our approach to education</h3>

          <ul>
            <WayToTeach {...ways[0]} />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>
        <section>
          <h3>How we differ from others.</h3>

          <Button onClick={() => handleClick("way")}>Approach</Button>
          <Button onClick={() => handleClick("easy")}>Accessibility</Button>
          <Button onClick={() => handleClick("program")}>Concentration</Button>

          <p>{differences[content]}</p>
        </section>
      </main>
    </div>
  );
}
