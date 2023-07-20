import { React, useState } from "react";
import "./Page.css";
import Header from "../Header/Header";
import Generators from "../Generators/Generators";
import Clicker from "../Clicker/Clicker";
import Upgrades from "../Upgrades/Upgrades";

//Modal imports
import ReactDOM from "react-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Page() {
  let subtitle;
  const [modalIsOpen, modalSetIsOpen] = useState(true);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    modalSetIsOpen(false);
  }
  return (
    <div className="page">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <form>
          <label>Username </label>
          <input />
          <br />
          <label>Password </label>
          <input />
          <br />
          <button>Submit</button>
        </form>
      </Modal>
      <Header />
      <Generators />
      <Clicker />
      <Upgrades />
    </div>
  );
}
