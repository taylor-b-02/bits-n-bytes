import { React } from "react";
import "./PurchaseGeneratorButton.css";

export default function PurchaseGeneratorButton(props) {
  const { generator, cost, onGeneratorBought } = props;

  function handleClick() {
    onGeneratorBought(generator);
  }

  function generateCost() {
    const number = Math.floor(cost);
    const formattedNumber = number.toLocaleString("en-US");
    return formattedNumber;
  }

  return (
    <div className="purchase-button">
      <button onClick={handleClick}>{generateCost()}</button>
    </div>
  );
}
