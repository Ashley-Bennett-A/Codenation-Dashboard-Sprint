import React from "react";
import News from "./Components/News";
import "./App.css";
import DateTime from "./Components/DateTime.jsx";
import Search from "./Components/Search";
import UsefulLinks from "./Components/UsefulLinks";
import Games from "./Components/Games";
import Chat from "./Components/Chat";

function App() {
  return (
    <div className="App">
      <DateTime />
      <UsefulLinks />
      <News />
      <Search />
      <Chat />
      {/* <Games /> */}
    </div>
  );
}

export default App;
