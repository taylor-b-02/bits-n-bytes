import React, { useEffect, useState } from "react";
import "./App.css";
import Page from "./components/Page/Page";
import Gen from "./GameLogic/Generator";
import game from "./GameLogic/game";
import UpgradeClass from "./GameLogic/upgrade";

const thousand = 1000;
const million = 1000000;
const billion = 1000000000;
// let trillion = 1000000000000;
// let quadrillion = 1000000000000000;


function App() {
  const [currency, setCurrency] = useState(0);
  const [clickValue, setClickValue] = useState(1);
  const [clickMult, setClickMult] = useState(1);
  const [generatorMult, setGeneratorMult] = useState(1);
  const [globalMult, setGlobalMult] = useState(1);
  const [ratePerSecond, setRatePerSecond] = useState(0);
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

  //called when clicker clicked
  function onClick() {
    setCurrency((prevCurrency) => prevCurrency + clickValue);
  }

  function handleCurrencyChange(amount) {
    setCurrency((prevCurrency) => prevCurrency + amount);
  }

  function getCurrency() {
    return currency;
  }

  let generator1 = new Gen(0, "HTML", 10, 1, 0, "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg");
  let generator2 = new Gen(1, "CSS", 250, 10, 0, "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg");
  let generator3 = new Gen(2, "Javascript", 10 * thousand, 100, 0, "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg");
  let generator4 = new Gen(3, "PHP", 250 * thousand, thousand, 0, "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg");
  let generator5 = new Gen(4, "React", 10 * million, 10 * thousand, 0, "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg");
  let generator6 = new Gen(5, "Tailwind", 25 * million, 100 * thousand, 0, "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg");
  let generator7 = new Gen(6, "Angular", 10 * billion, million, 0, "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg");
  let generator8 = new Gen(7, "Svelte", 25 * billion, 10 * million, 0, "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg");

  // eslint-disable-next-line
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
      game(0.1, generators, generatorMult, globalMult, handleCurrencyChange, setRatePerSecond);
    }, 100);

    return () => clearInterval(interval);
  }, [generators, generatorMult, globalMult]);

  //UPGRADES

  function onUpgradeBought(upgradeBoughten) {
    if (upgradeBoughten.getCost() <= getCurrency()) {
      handleCurrencyChange(-upgradeBoughten.getCost());
      upgradeBoughten.buy();
      //CLICK MULT
      if(upgradeBoughten.getType() === 0) {
        setClickMult(clickMult * upgradeBoughten.getMultiplier());
        setClickValue((prevClickValue) => prevClickValue * upgradeBoughten.getMultiplier());
      } else if(upgradeBoughten.getType() === 1) {
        setGeneratorMult((prevGeneratorMult) => prevGeneratorMult * upgradeBoughten.getMultiplier());
      } else if(upgradeBoughten.getType() === 2) {
        setGlobalMult((prevGlobalMult) => prevGlobalMult * upgradeBoughten.getMultiplier());
      }
    }
  }


  //creating the upgrades
  //key, name, cost, description, type, multiplier
  let upgrade1 = new UpgradeClass(0, "Click mult Upgrade", 10, "Increases the value of each click by 100%", 0, 2);
  let upgrade2 = new UpgradeClass(1, "Generator mult Upgrade", 100, "Increases the value of each Generator by 100%", 1, 2);
  let upgrade3 = new UpgradeClass(2, "Global mult Upgrade", 250, "Increases the value of all cps by 200%", 2, 4);
  let upgrade4 = new UpgradeClass(3, "Click mult Upgrade", thousand, "Increases the value of each click by 100%", 0, 2);
  let upgrade5 = new UpgradeClass(5, "Generator mult Upgrade", 25 * thousand, "Increases the value of each Generator by 100%", 1, 2);
  let upgrade6 = new UpgradeClass(6, "Global mult Upgrade", 250 * thousand, "Increases the value of all cps by 200%", 2, 4);
  let upgrade7 = new UpgradeClass(7, "Click mult Upgrade", 5 * million, "Increases the value of each click by 100%", 0, 2);
let upgrade8 = new UpgradeClass(8, "Generator mult Upgrade", 50 * million, "Increases the value of each Generator by 100%", 1, 2);
let upgrade9 = new UpgradeClass(9, "Global mult Upgrade", 100 * million, "Increases the value of all cps by 200%", 2, 4);
let upgrade10 = new UpgradeClass(10, "Click mult Upgrade", 1 * billion, "Increases the value of each click by 100%", 0, 2);

  // eslint-disable-next-line
  const [upgrades, setUpgrades] = useState([
    upgrade1,
    upgrade2,
    upgrade3,
    upgrade4,
    upgrade5,
    upgrade6,
    upgrade7,
    upgrade8,
    upgrade9,
    upgrade10,
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
        ratePerSecond={ratePerSecond}
      />
    </div>
  );
}

export default App;
