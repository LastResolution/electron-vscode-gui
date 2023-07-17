import { TitleBar } from "./components/TitleBar";

function App() {
  window.ipcRenderer.on("focus-change", (arg: any) => {
    console.log(arg.message);
  });
  return (
    <div className="App">
      <TitleBar />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>version: {window.electronAPI.version()}</div>
      </header> */}
    </div>
  );
}

export default App;
