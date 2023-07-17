import { app, BrowserWindow, ipcMain } from "electron";
import path = require("path");

const mainURL = `file:${__dirname}/../../index.html`;
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "1";
let mainWindow: BrowserWindow;

const createWidnow = () => {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 500,
    minHeight: 300,
    minWidth: 300,
    frame: true,
    autoHideMenuBar: false,
    titleBarStyle: "hidden",
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
    mainWindow.webContents.send("focus-change", {
      message: true,
    });
  });

  // defocus mainWindow
  mainWindow.on("blur", () => {
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

// minimize button click
ipcMain.handle("minimize-app", () => {
  mainWindow.minimize();
});

// close button click
ipcMain.handle("close-app", () => {
  app.quit();
});
