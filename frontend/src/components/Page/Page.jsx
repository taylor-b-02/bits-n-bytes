import { React, useState } from "react";
import "./Page.css";
import Header from "../Header/Header";
import Generators from "../Generators/Generators";
import Clicker from "../Clicker/Clicker";
import Upgrades from "../Upgrades/Upgrades";

//Modal imports
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Page() {
  const [modalIsOpen, modalSetIsOpen] = useState(true);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log("Modal is open");
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
      >
        <div className="modal">
          <h1 style={{ color: "var(--dark-primary" }}>
            Bits <span style={{ color: "green" }}>&</span> Bytes
          </h1>
          <form>
            <label>Username </label>
            <input />
            <br />
            <label>Password </label>
            <input />
            <br />
            <button>Submit</button>
            <button onClick={closeModal}>close</button>
          </form>
        </div>
      </Modal>
      <Header />
      <Generators />
      <Clicker />
      <Upgrades />
    </div>
  );
}
