import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from "./components/AddItemForm";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string,TodoListID: string) => void
    changeFilterTodoList: (value: FilterValuesType,TodoListID: string) => void
    addTask: (title: string,TodoListID: string) => void
    isDoneChange:(id:string, event:boolean,TodoListID: string)=>void
    DelTodoList:(TodoListID: string)=>void
    TodoListId:string
}

export function Todolist(props: PropsType) {




    const addTask = (title:string )=> {
props.addTask(title, props.TodoListId)
    }



    const onAllClickHandler = () => props.changeFilterTodoList("all", props.TodoListId);
    const onActiveClickHandler = () => props.changeFilterTodoList("active", props.TodoListId);
    const onCompletedClickHandler = () => props.changeFilterTodoList("completed", props.TodoListId);
    const DelTodoList=()=>{
        props.DelTodoList(props.TodoListId)
    }

    return <div>
        <h3>{props.title}</h3>
        <span onClick={DelTodoList}>X</span>
<AddItemForm addItem={addTask}/>
        <ul>
            {
                props.tasks.map(t => {
                    const isDoneHandler=(event:ChangeEvent<HTMLInputElement>)=>{
                        props.isDoneChange(t.id,event.currentTarget.checked, props.TodoListId)

                    }
                    const onClickHandler = () => props.removeTask(t.id, props.TodoListId)

                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone} onChange={isDoneHandler}/>
                        <span>{t.title}</span>
                        <button onClick={ onClickHandler }>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button onClick={ onAllClickHandler }>All</button>
            <button onClick={ onActiveClickHandler }>Active</button>
            <button onClick={ onCompletedClickHandler }>Completed</button>
        </div>
    </div>
}
