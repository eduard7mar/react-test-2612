import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function EffectSection() {
  function openModal() {}

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Open the information</Button>

      <Modal>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          dolorem provident iusto ea sapiente architecto.
        </p>
      </Modal>
    </section>
  );
}
