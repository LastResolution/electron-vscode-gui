import { useState } from "react";
import { MaximizeButton } from "./MaximizeButton";
import { MinimizeButton } from "./MinimizeButton";
import { CloseButton } from "./CloseButton";
import "../css/ControlButton.css";

export const ControlButton = () => {
  const [isMaximize, setMaximize] = useState(false);

  window.ipcRenderer.on("maximize-change", (args: any) => {
    setMaximize(args.message);
  });

  const closeApp = () => {
    window.electronAPI.closeApp();
  };

  const minimizeApp = () => {
    window.electronAPI.minimizeApp();
  };

  const maximizeApp = () => {
    window.electronAPI.maximizeApp(isMaximize);
  };

  return (
    <div id="control-button">
      <MinimizeButton minimizeFunction={minimizeApp} />
      <MaximizeButton maximizefunction={maximizeApp} isMaximize={isMaximize} />
      <CloseButton closeFunction={closeApp} />
    </div>
  );
};
