import { app, BrowserWindow, ipcMain } from "electron";
import path = require("path");

const mainURL = `file:${__dirname}/../../index.html`;

const createWidnow = () => {
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 500,
    minHeight: 300,
    minWidth: 300,
    frame: true,
    autoHideMenuBar: false,
    titleBarStyle: "hidden",
    // titleBarOverlay: {
    //   color: "#3c3c3c",
    //   symbolColor: "#cccccc",
    //   height: 30,
    // },
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  mainWindow.loadURL(mainURL);
  mainWindow.webContents.openDevTools();

  // focus mainWindow
  mainWindow.on("focus", () => {
    console.log("active");
    mainWindow.webContents.send("focus-change", {
      message: true,
    });
  });

  // defocus mainWindow
  mainWindow.on("blur", () => {
    console.log("deactive");
    mainWindow.webContents.send("focus-change", {
      message: false,
    });
  });
};

app.whenReady().then(() => {
  createWidnow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWidnow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.handle("close-app", () => {
  app.quit();
});
