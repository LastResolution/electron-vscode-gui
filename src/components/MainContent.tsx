import React from "react";
import "../css/MainContent.css";
import vs_logo_image from "../images/vs_logo_large.svg";

export const MainContent = () => {
  return (
    <div id="main-content">
      <img id="vs-logo" src={vs_logo_image} alt="vs_logo" />
    </div>
  );
};
