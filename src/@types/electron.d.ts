declare global {
  interface Window {
    ipcRenderer: any;
  }
}

export const { ipcRenderer } = window;
