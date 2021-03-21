import React, { useState } from "react";

export default function Task(params) {
    console.log(params)
    var [state, setState] = useState(1)
    const updateState = () =>{
        setState(state===0 ? 1: 0)
        console.log(state)
        let taskName = document.getElementById('task-name')
        console.log(taskName)
            if(state){
                taskName.classList.add('active')
            }else{
                taskName.classList.remove('active')
            }
            console.log(taskName.classList)

    }
    return(
        <div className = "task">
            <input type = "checkbox" id = 'task-status' value = {state} onChange = {() => updateState()}>
            </input>
            <label for = 'task-status' id = 'task-name' className = 'task-name'>
                    {params.name}
                </label>

        </div>
    );
}