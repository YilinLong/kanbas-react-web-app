import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Labs from "./Labs";
import {HashRouter} from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Welcome to Web Dev!!</h1>
      <HashRouter>
          <div>
              <Labs />
          </div>
      </HashRouter>
    </div>
  );
}

export default App;
