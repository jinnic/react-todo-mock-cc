import React, { Component } from 'react';
import CompletedContainer from './CompletedContainer'
import IncompleteContainer from './IncompleteContainer'
import NewToDoForm from './NewToDoForm'

export default class ToDoContainer extends Component {
  
  
  filterTodos =(todos, complete=false)=>{
    if(complete){
      return todos.filter(todo => todo.completed)
      // console.log('complete : ',todos.filter(todo => todo.completed)) 
    }
    return todos.filter(todo => todo.completed===false)
    // console.log(todos.filter(todo => todo.completed===false)) 
  }

  render() {
    const todos = this.props.todos
    console.log(todos)

    return (
      <div id="todo-container">
        <NewToDoForm updateTodo={this.props.updateTodo}/>
        <CompletedContainer updateTodo={this.props.updateTodo} todos={this.filterTodos(this.props.todos, true)}/>
        <IncompleteContainer updateTodo={this.props.updateTodo} todos={this.filterTodos(this.props.todos, false)}/>
      </div>
    );
  }
}
