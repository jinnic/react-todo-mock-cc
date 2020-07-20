import React from 'react'
import ToDoCard from './ToDoCard'

const CompletedContainer = (props) => {
   
    return (   
        <div>
            {/* {console.log('CompletedContainer props : ', props)} */}
            <h1>Completed Todos</h1>
            {props.todos.map(todo => <ToDoCard key={todo.id} todo={todo} button={'complete'}  updateTodo={props.updateTodo}/>)}
        </div>
    )
}

export default CompletedContainer