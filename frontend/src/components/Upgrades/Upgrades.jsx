import { React } from "react";
import "./Upgrades.css";
import Upgrade from "../Upgrade/Upgrade";

export default function Upgrades(props) {
  const { upgrades, onUpgradeBought } = props;
  return (
    <div className="upgrades">
      {upgrades.map((upgrade) => {
        if(upgrade.owned) return null;
        
        return (
          <Upgrade
            key={upgrade.key}
            upgrade={upgrade}
            onUpgradeBought={onUpgradeBought}
          />
        );
      })}
    </div>
  );
}
