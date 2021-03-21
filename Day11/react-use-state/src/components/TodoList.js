import React, { useState } from "react";
import Task from './Task.js'
export default function TodoList(params) {
    var [todoName, setTodoName] = useState("")
    var [todos, setTodos] = useState([])
    const addTodo = () =>{
        console.log(typeof(todos));
        console.log(todoName)
        setTodos([...todos, todoName])  
        console.log([...todos, todoName])      
    }
    return(
        <div className = "todo-list">
            <div className = "container">
            <label for="add-todo" > Enter Todo Name: </label>
            <input type = "text" id = "add-todo" className = "add-todo" value = {todoName} onChange = {(e) => setTodoName(e.target.value)}>
                
            </input>
            <button onClick={() => addTodo()}> Add Todo</button>
            </div>
            <div className = 'todos'>
                {
                    todos.map((todo, index) =>{
                        return (<Task name = {todo} key = {index}></Task>)
                    })
                }
            </div>
        </div>
    );
}