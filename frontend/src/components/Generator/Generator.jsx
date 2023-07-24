import { React } from "react";
import "./Generator.css";
import GeneratorPhoto from "../GeneratorPhoto/GeneratorPhoto";
import PurchaseGeneratorButton from "../PurchaseGeneratorButton/PurchaseGeneratorButton";

export default function Generator(props) {
    const { generator, onGeneratorBought } = props;

  return (
    <div className="generator">
      <GeneratorPhoto />
      <div className="generator-container">
        <h3>{generator.name}</h3>
        <p>{Math.floor(generator.getValue())}</p>
      </div>
      <PurchaseGeneratorButton
        generator={generator} 
        cost={generator.getCost()}
        onGeneratorBought={onGeneratorBought}
      />
    </div>
  );
}
