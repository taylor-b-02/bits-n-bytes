import { React } from "react";
import "./Upgrades.css";
import Upgrade from "../Upgrade/Upgrade";

export default function Upgrades(props) {
  const { upgrades, onUpgradeBought } = props;
  return (
    <div className="upgrades">
      {upgrades.map((upgrade) => {
        return (
          <Upgrade
            key={upgrade.name}
            upgrade={upgrade}
            onUpgradeBought={onUpgradeBought}
          />
        );
      })}
    </div>
  );
}
