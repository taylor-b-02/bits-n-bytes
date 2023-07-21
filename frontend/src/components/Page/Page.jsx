import { React, useState } from "react";
import "./Page.css";
import Header from "../Header/Header";
import Generators from "../Generators/Generators";
import Clicker from "../Clicker/Clicker";
import Upgrades from "../Upgrades/Upgrades";
import Gen from "../../GameLogic/Generator"

//Modal imports
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Page() {
  const [currency, setCurrency] = useState(0);
  const [clickValue, setClickValue] = useState(1);
  const [clickMult, setClickMult] = useState(1);
  const [generatorMult, setGeneratorMult] = useState(1);
  const [globalMult, setGlobalMult] = useState(1);
  const [cpsRate, setCpsRate] = useState(0);
  const [generators, setGenerators] = useState([]);
  //Data scenario: 
  //We will have an array of generators, each with their own properties
  //we will have an array of clickMults, with the resulting clickMult being the product of all of them
  //we will have an array of generatorMults, with the resulting generatorMult being the product of all of them
  //we will have an array of globalMults, with the resulting globalMult being the product of all of them

  //we will have an update function that runs every 1/10 seconds that updates the currency based on the rate,
  //which is the sum of all the generators' rates, multiplied by the generatorMult and globalMult

  //every click will add the clickValue * clickMult * globalMult to the currency

  //when upgrades are bought they are removed from the unpurchased array and added to the purchased array
  //when generators are bought they increase the count of their respective generator, affecting the cost of the next one


  let testGen = new Gen("test", 10, 1, 1, 1.1, 10);
  console.log(testGen);
  //Math before passing values to props
  //calculate real click value after multipliers are applied

  function calculateClickValue() {
    return clickValue * clickMult * globalMult;
  }


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
      <Header />
      <Generators />
      <Clicker />
      <Upgrades />
    </div>
  );
}
