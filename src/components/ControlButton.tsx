import React from "react";
import { MaximizeButton } from "./MaximizeButton";
import { MinimizeButton } from "./MinimizeButton";
import { CloseButton } from "./CloseButton";
import "../css/ControlButton.css";

export const ControlButton = () => {
  return (
    <div id="control-button">
      <MinimizeButton />
      <MaximizeButton />
      <CloseButton />
    </div>
  );
};
