export interface IElectronAPI {
  closeApp: () => void;
  minimizeApp: () => void;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
