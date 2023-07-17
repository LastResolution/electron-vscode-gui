import { useEffect } from "react";
import "../css/TitleBar.css";
import { ControlButton } from "./ControlButton";
import { AppIcon } from "./AppIcon";

export const TitleBar = () => {
  useEffect(() => {});
  return (
    <nav id="title-bar">
      <AppIcon />
      <div id="title">App.tsx - electron-vs-code-gui - Visual Studio Code</div>
      <ControlButton />
    </nav>
  );
};
