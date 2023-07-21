import { useState } from "react";
import "../css/TitleBar.css";
import { ControlButton } from "./ControlButton";
import { AppIcon } from "./AppIcon";

export const TitleBar = () => {
  const [isActive, setActive] = useState(true);
  window.ipcRenderer.on("focus-change", (arg: any) => {
    setActive(arg.isActive);
  });
  return (
    <nav id="title-bar" className={`${isActive ? "active" : "deactive"}`}>
      <AppIcon />
      <div id="title">App.tsx - electron-vs-code-gui - Visual Studio Code</div>
      <ControlButton />
    </nav>
  );
};
