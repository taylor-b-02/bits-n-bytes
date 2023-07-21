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

  

  //Defining the generators here
  let generator1 = new Gen("Generator 1", 10, 1, 1, 1, 1, 1, 1, 1, 1);
  let generator2 = new Gen("Generator 2", 100, 10, 1, 1, 1, 1, 1, 1, 1);
  let generator3 = new Gen("Generator 3", 1000, 100, 1, 1, 1, 1, 1, 1, 1);
  let generator4 = new Gen("Generator 4", 10000, 1000, 1, 1, 1, 1, 1, 1, 1);
  let generator5 = new Gen("Generator 5", 100000, 10000, 1, 1, 1, 1, 1, 1, 1);
  let generator6 = new Gen("Generator 6", 1000000, 100000, 1, 1, 1, 1, 1, 1, 1);
  let generator7 = new Gen("Generator 7", 10000000, 1000000, 1, 1, 1, 1, 1, 1, 1);
  let generator8 = new Gen("Generator 8", 100000000, 10000000, 1, 1, 1, 1, 1, 1, 1);
  const [generators, setGenerators] = useState([generator1, generator2, generator3, generator4, generator5, generator6, generator7, generator8]);

  
  console.log(generators);
  //Math before passing values to props
  //calculate real click value after multipliers are applied
  function calculateClickValue() {
    return clickValue * clickMult * globalMult;
  }


  //called when clicker clicked
  function handleClick() {
    setCurrency(prevCurrency => prevCurrency + calculateClickValue());
    console.log(currency);
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
      <Header 
        currency={currency}
      />
      <Generators
        currency={currency}
        setCurrency={handleClick}
        generators={generators}
        setGenerators={setGenerators}

      />
      <Clicker 
        currency={currency}
        handleClick={handleClick}
        clickValue={clickValue}
        clickMult={clickMult}
      />
      <Upgrades />
    </div>
  );
}
