import React, { Component } from "react";
import ChuckNorrisImg from "./assets/chuck_norris.png";

class ChuckNorris extends Component {
  state = {
    joke: ""
  };
  componentDidMount() {
    fetch("http://api.icndb.com/jokes/random?exclude=[explicit]")
      .then(results => {
        return results.json();
      })
      .then(data => {
        console.log(data.value.joke.replace(/(&quot\;)/g, '"'));
        this.setState({ joke: data.value.joke.replace(/(&quot\;)/g, '"') });
      });
  }
  render() {
    return (
      <div className="chuckNorris">
        <h2>Your random Chuck Norris fact is ...</h2>
        <h3>{this.state.joke}</h3>
        <img src={ChuckNorrisImg} alt="" />
      </div>
    );
  }
}

export default ChuckNorris;
