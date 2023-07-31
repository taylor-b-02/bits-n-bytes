import { React } from "react";
import "./UpgradePhoto.css";
import pointerSvg from "./pointer.svg"
import gearsSvg from "./gears.svg"
import globeSvg from "./globe.svg"

export default function UpgradePhoto(props) {
  const { type } = props;
  let url = "";

  //type is int 0-2, 0 is click, 1 is generator, 2 is global
  if(type === 0) {
    url = pointerSvg;
  } else if(type === 1) {
    url = gearsSvg;
  } else if(type === 2) {
    url = globeSvg;
  }
  

  return (
    <div className="upgrade-photo">
      <img src={url} alt="generator" />
    </div>
  );
}
