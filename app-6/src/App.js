import React, {Component} from 'react';
import './App.css';
import Todo from "./Todo"

class App extends Component {
  constructor(){
    super()
    
    this.state = {
      list: [],
      chore: ""

    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

handleChore(value) {
  this.setState({chore: value})
}

handleAddTask(){
  this.setState({
    list: [...this.state.list, this.state.chore],
    chore: ""
  })
}

render(){
  let list = this.state.list.map((element, index) => {
    return <Todo key={index} task={element} />
  })
  return (
  <div className = "App">
    <h1>My To-Do List:</h1>

   <div>
     <input value={this.state.chore}
            placeholder="Enter new task"
            onChange={e => this.handleChore(e.target.value)}
            />
     <button onClick={this.handleAddTask}>Add</button> 
   </div>

   <br />

   {list}
   </div>
    )
  }
}

export default App;
