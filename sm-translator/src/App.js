import React from "react";
import "./App.css";
import Translator from "./components/translator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Translator App</h1>
        <Translator />
      </header>
    </div>
  );
}

export default App;
