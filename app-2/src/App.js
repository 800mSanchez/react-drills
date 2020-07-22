import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      runners: [ "David Rudisha", "Donovan Brazier", "Lopez Lomong"]
    }
  }

  render(){
    let runnersToDisplay = this.state.runners.map((element,index) => {
  return <h2 key={index}>{element}</h2>
    })
    return <div className="App">{runnersToDisplay}</div>
}
  
}

export default App;
