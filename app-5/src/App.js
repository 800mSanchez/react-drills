import React, { Component } from "react";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://cnet4.cbsistatic.com/img/FWS_5pvJhxEYkyBaW8gsEf0RU6E=/940x0/2020/07/22/ce93c5e2-f63b-43ea-b9f9-8be6bf6a112a/halo-infinite-art.jpg"} />
      </div>
    );
  }
}

export default App;
