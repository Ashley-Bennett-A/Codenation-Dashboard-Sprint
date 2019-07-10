import React from "react";
import News from "./Components/News";
import "./App.css";
import DateTime from "./Components/DateTime";
import Search from "./Components/Search";
import Weather from './Components/Weather'
import UsefulLinks from "./Components/UsefulLinks";

function App() {
  return (
    <div className="App">
      <DateTime />
      <Weather />
      <UsefulLinks />
      <News />
      <Search />
    </div>
  );
}

export default App;
