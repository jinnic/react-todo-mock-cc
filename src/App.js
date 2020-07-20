import React from 'react';
import './App.css';
import Header from './components/Header'
import ToDoContainer from './components/ToDoContainer'


class App extends React.Component{

  state = {
    todos: []
  }
  componentDidMount(){
    fetch('http://localhost:3000/todos')
      .then(r => r.json())
      .then(todoList => this.setState({todos: todoList}, ()=> console.log(this.state)))
  }

  updateTodo=(todo)=>{
    fetch('http://localhost:3000/todos')
      .then(r => r.json())
      .then(todoList => this.setState({todos: todoList}, ()=> console.log(this.state)))
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <ToDoContainer todos={this.state.todos} updateTodo={this.updateTodo}/>
      </div>
    );
  }
}

export default App;
