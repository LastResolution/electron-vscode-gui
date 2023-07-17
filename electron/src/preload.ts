import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  closeApp: () => ipcRenderer.invoke("close-app"),
});
