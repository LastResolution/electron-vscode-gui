import { useEffect } from "react";
import "../css/TitleBar.css";
import { ControlButton } from "./ControlButton";

export const TitleBar = () => {
  useEffect(() => {});
  return (
    <nav id="title-bar">
      <div id="empty"></div>
      <div id="title">App.tsx - electron-vs-code-gui - Visual Studio Code</div>
      <ControlButton />
    </nav>
  );
};
