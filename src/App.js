import React from "react";
import News from "./Components/News";
import "./App.css";
import DateTime from "./Components/DateTime.jsx";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <DateTime />
      <News />
      <Search />
    </div>
  );
}

export default App;
