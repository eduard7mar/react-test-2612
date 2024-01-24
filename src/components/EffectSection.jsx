import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { useState } from "react";

export default function EffectSection() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  function openModal() {
    setModal(true);
  }

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Open the information</Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          dolorem provident iusto ea sapiente architecto.
        </p>
        <Button onClick={() => setModal(false)}>Close Modal</Button>
      </Modal>
    </section>
  );
}
