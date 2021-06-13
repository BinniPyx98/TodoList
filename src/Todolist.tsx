import React from 'react';
import {nameButtonType} from "./App";
import {Button} from "./components/Button";
import {Input} from "./components/Input";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (id: string) => void
    changeFilter: (nameButton:nameButtonType) => void
    addTask:(title:string)=>void
}

export function Todolist(props: PropsType) {

    const changeFilterHandlerAll=()=>{   props.changeFilter('All' )    }
    const changeFilterHandlerActive=()=>{   props.changeFilter('Active' )    }
    const changeFilterHandlerCompleted=()=>{   props.changeFilter('Completed' )    }

    return <div>
        <h3>{props.title}</h3>
        <div>
         <Input addTask={props.addTask}/>
        </div>
        <ul>

            {props.tasks.map(task=>{
                const removeTaskHandler=()=>{
                    props.removeTasks(task.id)
                }
                return(
                    <li key={task.id}>
                        <Button callBack={removeTaskHandler} buttonName={'X'}/>

                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.title}</span></li>
                )
            })}


        </ul>
        <div>
            <Button callBack={()=>changeFilterHandlerAll()} buttonName={'All'}/>
            <Button callBack={()=>changeFilterHandlerActive() } buttonName={'Active'}/>
            <Button callBack={()=>changeFilterHandlerCompleted()} buttonName={'Completed'}/>

        </div>
    </div>
}
