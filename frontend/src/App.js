import React, { useEffect, useState } from "react";
import "./App.css";
import Page from "./components/Page/Page";
import Gen from "./GameLogic/Generator";
import game from "./GameLogic/game";
import UpgradeClass from "./GameLogic/upgrade";

function App() {
  const [currency, setCurrency] = useState(0);
  const [clickValue, setClickValue] = useState(1);
  const [clickMult, setClickMult] = useState(1);
  const [generatorMult, setGeneratorMult] = useState(1);
  const [globalMult, setGlobalMult] = useState(1);
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
  //name, baseCost, baseValue, count

  //called when generator bought
  function onGeneratorBought(generatorBoughten) {
    if (generatorBoughten.getCost() <= getCurrency()) {
      handleCurrencyChange(-generatorBoughten.getCost());
      generatorBoughten.addGenerator();
    }
  }

  //Math before passing values to props
  //calculate real click value after multipliers are applied
  function calculateClickValue() {
    return clickValue * clickMult * globalMult;
  }

  //called when clicker clicked
  function onClick() {
    setCurrency((prevCurrency) => prevCurrency + calculateClickValue());
  }

  function handleCurrencyChange(amount) {
    setCurrency((prevCurrency) => prevCurrency + amount);
  }

  function getCurrency() {
    return currency;
  }

  let generator1 = new Gen(0, "A", 10, 1, 0);
  let generator2 = new Gen(1, "B", 100, 10, 0);
  let generator3 = new Gen(2, "C", 1000, 100, 0);
  let generator4 = new Gen(3, "D", 10000, 1000, 0);
  let generator5 = new Gen(4, "E", 100000, 10000, 0);
  let generator6 = new Gen(5, "F", 1000000, 100000, 0);
  let generator7 = new Gen(6, "G", 10000000, 1000000, 0);
  let generator8 = new Gen(7, "H", 100000000, 10000000, 0);
  const [generators, setGenerators] = useState([
    generator1,
    generator2,
    generator3,
    generator4,
    generator5,
    generator6,
    generator7,
    generator8,
  ]);



  //handles game logic and updates currency based on generators owned and their rates + multipliers
  useEffect(() => {
    let interval = setInterval(() => {
      //first value is freq. of interval
      game(0.1, generators, generatorMult, globalMult, handleCurrencyChange);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  //UPGRADES

  function onUpgradeBought(upgradeBoughten) {
    if (upgradeBoughten.getCost() <= getCurrency()) {
      handleCurrencyChange(-upgradeBoughten.getCost());
      upgradeBoughten.buy();
      //CLICK MULT
      if(upgradeBoughten.getType() == 0) {
        setClickMult((prevClickMult) => prevClickMult * upgradeBoughten.getMultiplier());
      } else if(upgradeBoughten.getType() == 1) {
        setGeneratorMult((prevGeneratorMult) => prevGeneratorMult * upgradeBoughten.getMultiplier());
      } else if(upgradeBoughten.getType() == 2) {
        setGlobalMult((prevGlobalMult) => prevGlobalMult * upgradeBoughten.getMultiplier());
      }
    }
  }


  //creating the upgrades
  //key, name, cost, description, type, multiplier
  let upgrade1 = new UpgradeClass(0, "Click mult Upgrade", 10, "Increases the value of each click by 100%", 0, 2);
  let upgrade2 = new UpgradeClass(1, "Generator mult Upgrade", 100, "Increases the value of each click by 100%", 0, 2);
  let upgrade3 = new UpgradeClass(2, "Global mult Upgrade", 1000, "Increases the value of all cps by 200%", 0, 4);

  const [upgrades, setUpgrades] = useState([
    upgrade1,
    upgrade2,
    upgrade3,
  ]);

  return (
    <div>
      <Page
        generators={generators}
        onGeneratorBought={onGeneratorBought}
        upgrades={upgrades}
        onUpgradeBought={onUpgradeBought}
        currency={currency}
        onClick={onClick}
        clickValue={clickValue}
      />
    </div>
  );
}

export default App;
