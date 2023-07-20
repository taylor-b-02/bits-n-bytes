import { React } from "react";
import "./Upgrade.css";
import PurchaseButton from "../PurchaseButton/PurchaseButton";
import UpgradePhoto from "../UpgradePhoto/UpgradePhoto";

export default function Upgrade() {
  return (
    <div className="upgrade">
      <UpgradePhoto />
      <div className="upgrade-container">
        <h3>Upgrade Name</h3>
        <p>Upgrade Description</p>
      </div>
      <PurchaseButton />
    </div>
  );
}
