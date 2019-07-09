import React from "react";
import News from "./Components/News";
import "./App.css";
import DateTime from "./Components/DateTime.jsx";

function App() {
  return (
    <div className="App">
      <DateTime />
      <News />
    </div>
  );
}

export default App;
