import { app, BrowserWindow, ipcMain } from "electron";
import path = require("path");
const { shell } = require("electron");

const mainURL = `file:${__dirname}/../../index.html`;
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "1";
let mainWindow: BrowserWindow;

const createWidnow = () => {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 500,
    minHeight: 600,
    minWidth: 500,
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

  // maximize mainWindow
  mainWindow.on("maximize", () => {
    mainWindow.webContents.send("maximize-change", {
      message: true,
    });
  });

  // unmaximize mainWindow
  mainWindow.on("unmaximize", () => {
    mainWindow.webContents.send("maximize-change", {
      message: false,
    });
  });

  // open browser
  mainWindow.webContents.on("will-navigate", (e, url) => {
    e.preventDefault();
    shell.openExternal(url);
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

// minimize button click
ipcMain.handle("maximize-app", (event, args) => {
  if (args.isMaximize) {
    mainWindow.unmaximize();
  } else {
    mainWindow.maximize();
  }
});

// close button click
ipcMain.handle("close-app", () => {
  app.quit();
});
