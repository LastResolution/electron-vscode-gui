import { useEffect } from "react";
import "../css/styles.css";
import { ControlButton } from "./ControlButton";

export const TitleBar = () => {
  useEffect(() => {});
  return (
    <nav id="title-bar">
      <div id="empty"></div>
      <p id="title">App.tsx - electron-vs-code-gui - Visual Studio Code</p>
      <ControlButton />
    </nav>
  );
};
