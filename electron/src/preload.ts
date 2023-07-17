import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  closeApp: () => ipcRenderer.invoke("close-app"),
});

process.once("loaded", () => {
  contextBridge.exposeInMainWorld("ipcRenderer", {
    ...ipcRenderer,
    on: (channel: string, func: (arg: any) => void) => {
      ipcRenderer.on(channel, (event, arg) => func(arg));
    },
  });
});
