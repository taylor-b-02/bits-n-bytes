import { React } from "react";
import "./Upgrade.css";
import PurchaseUpgradeButton from "../PurchaseUpgradeButton/PurchaseUpgradeButton";
import UpgradePhoto from "../UpgradePhoto/UpgradePhoto";

export default function Upgrade(props) {
  const { upgrade, onUpgradeBought } = props;

  return (
    <div className="upgrade">
      <UpgradePhoto />
      <div className="upgrade-container">
        <h3>{upgrade.name}</h3>
        <p>{upgrade.description}</p>
      </div>
      <PurchaseUpgradeButton 
        upgrade={upgrade}
        cost={upgrade.getCost()}
        onUpgradeBought={onUpgradeBought}
      />
    </div>
  );
}
