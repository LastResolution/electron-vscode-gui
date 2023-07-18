export interface IElectronAPI {
  closeApp: () => void;
  minimizeApp: () => void;
  maximizeApp: (isMaximize: boolean) => void;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
