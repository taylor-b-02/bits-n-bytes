import { React, useState, useEffect } from "react";
import "./Page.css";
import Header from "../Header/Header";
import Generators from "../Generators/Generators";
import Clicker from "../Clicker/Clicker";
import Upgrades from "../Upgrades/Upgrades";
import Gen from "../../GameLogic/Generator";

import game from "../../GameLogic/game";

//Modal imports
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Page(props) {
  const {generators, onGeneratorBought, upgrades, onUpgradeBought, currency, onClick, clickValue} = props;
  

  //Modal logic 
  const [modalIsOpen, modalSetIsOpen] = useState(true);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    modalSetIsOpen(false);
  }

  //trying to figure out how to make the generators happen every X seconds, probs could just get time or make 
  //a frame count etc. 
  //game(100, generators, generatorMult, globalMult, handleCurrencyChange);
  return (
    <div className="page">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="modal-container"
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
      <Header currency={currency} />
      <Generators
        currency={currency}
        generators={generators}
        onGeneratorBought={onGeneratorBought}
      />
      <Clicker
        currency={currency}
        onClick={onClick}
        clickValue={clickValue}
      />
      <Upgrades 
        currency={currency}
        upgrades={upgrades}
        onUpgradeBought={onUpgradeBought}
      />
    </div>
  );
}
