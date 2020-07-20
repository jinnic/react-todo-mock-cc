import React from 'react'

const ToDoCard = (props) => {
  
  const handleUpdate=(todos)=>{
    console.log('handleUpdate object: ',todos)
   
    fetch(`http://localhost:3000/todos/${todos.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todos)
    })
      .then(r => r.json())
      // .then(console.log)
      .then(updateTodoObj => {
        // pessimitic rendering 
        props.updateTodo()
      })
  }

  const handleDelete=(todos)=>{
    console.log(todos)
   
    fetch(`http://localhost:3000/todos/${todos.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(()=>props.updateTodo())
      // .then(updateTodoObj => {
      //   // pessimitic rendering 
      //   props.updateTodo(updateTodoObj)
      // })
  }

  const handleClick=(e)=>{
    let updateTodoObj={
      ...props.todo
    }
    
    switch (e.target.innerText) {
      case 'Complete':
        updateTodoObj.completed = true
        console.log("Complete Button Clicked ",updateTodoObj)
        handleUpdate(updateTodoObj)
        break;
      case 'Incomplete':
        updateTodoObj.completed = false
        console.log("Incomplete Button Clicked ",updateTodoObj)
        handleUpdate(updateTodoObj)
        break;
      case 'Delete':
        console.log("Delete Button Clicked ",updateTodoObj)
        handleDelete(updateTodoObj)
        // props.updateTodo(updateTodoObj)
        break;
      default:
        console.log("?? Button Clicked ",updateTodoObj)
        break;
    }
    // console.log(updateTodoObj)
    // props.updateTodo
  }
    return (
    <div className="ui card">
        <div className="content">
          <div className="header">{props.todo.title}</div>
          {/* The button will require some conditional rendering. 
            If the button is under the Incomplete Container, button should be blue and text should say Complete
            If the button is under Complete Container, button should be orange and text should say Incomplete 
            */}
            {props.button === 'incomplete' ? 
              <button onClick={handleClick} className="ui button blue">Complete</button> :
              <button onClick={handleClick} className="ui button orange">Incomplete</button>}
         
          <button onClick={handleClick} className="ui button red">Delete</button>
        </div>
        
    </div>
    )
}

export default ToDoCard