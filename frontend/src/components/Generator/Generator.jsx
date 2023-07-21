import { React } from "react";
import "./Generator.css";
import GeneratorPhoto from "../GeneratorPhoto/GeneratorPhoto";
import PurchaseButton from "../PurchaseGeneratorButton/PurchaseGeneratorButton";

export default function Generator(props) {
    const { generator, onGeneratorBought } = props;

  return (
    <div className="generator">
      <GeneratorPhoto />
      <div className="generator-container">
        <h3>{generator.name}</h3>
        <p>{generator.cost}</p>
      </div>
      <PurchaseButton
        generator={generator} 
        cost={generator.cost}
        onGeneratorBought={onGeneratorBought}
      />
    </div>
  );
}
