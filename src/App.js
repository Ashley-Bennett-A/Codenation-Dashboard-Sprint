import React from "react";
import News from "./Components/News";
import "./App.css";
import Greeter from "./Components/Greeter"
import Search from "./Components/Search";
import UsefulLinks from "./Components/UsefulLinks";
import Games from "./Components/Games";
import Chat from "./Components/Chat";
import ChuckNorris from "./Components/ChuckNorris";

function App() {
  return (
    <div className="App">
      <h1>//about:blank</h1>

      <Greeter />
      <UsefulLinks />
      <News />
      <Search />
      <Chat />
      <ChuckNorris />
      {/* <Games /> */}
    </div>
  );
}

export default App;
