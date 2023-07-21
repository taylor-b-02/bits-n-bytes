import { React } from "react";
import "./Generator.css";
import GeneratorPhoto from "../GeneratorPhoto/GeneratorPhoto";
import PurchaseButton from "../PurchaseButton/PurchaseButton";

export default function Generator(props) {
    const { generator, currency, onGeneratorBought } = props;

  return (
    <div className="generator">
      <GeneratorPhoto />
      <div className="generator-container">
        <h3>{generator.name}</h3>
        <p>{generator.cost}</p>
      </div>
      <PurchaseButton
        generator={generator} 
        currency={currency}
        cost={generator.cost}
        onGeneratorBought={onGeneratorBought}
      />
    </div>
  );
}
