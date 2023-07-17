import React from "react";
import { MaximizeButton } from "./MaximizeButton";
import { MinimizeButton } from "./MinimizeButton";
import { CloseButton } from "./CloseButton";
import "../css/ControlButton.css";

export const ControlButton = () => {
  const closeApp = () => {
    window.electronAPI.closeApp();
  };

  const minimizeApp = () => {
    window.electronAPI.minimizeApp();
  };

  return (
    <div id="control-button">
      <MinimizeButton minimizeFunction={minimizeApp} />
      <MaximizeButton />
      <CloseButton closeFunction={closeApp} />
    </div>
  );
};
