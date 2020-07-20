import React, { Component } from 'react';

export default class NewToDoForm extends Component {
  state ={
    title: '',
    completed: false
  }
  handleInput=(e)=>{
    this.setState({
      title: e.target.value
    },()=>console.log(this.state))
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    console.log(this.state)
   
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(r => r.json())
      .then(newTodo => {
        // pessimitic rendering 
        this.props.updateTodo(newTodo)
      })
  }
  render() {
    console.log("NewToDoForm props : ",this.props)
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
            <h1>New ToDo</h1>
            <div className="field">
                <label>Title</label>
                <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleInput}/>
            </div>
            <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
