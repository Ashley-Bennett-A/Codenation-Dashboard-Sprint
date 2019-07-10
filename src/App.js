import React from "react";
import News from "./Components/News";
import "./App.css";
import DateTime from "./Components/DateTime";
import Search from "./Components/Search";
import Weather from "./Components/Weather";
import UsefulLinks from "./Components/UsefulLinks";
import Games from "./Components/Games";
import Chat from "./Components/Chat";
import ChuckNorris from "./Components/ChuckNorris";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <DateTime />
      {/* <Weather /> */}
      <UsefulLinks />
      <News />
      <Search />
      <Chat />
      <ChuckNorris /> {/* <Games /> */}{" "}
    </div>
  );
}

export default App;
