import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";


export type nameButtonType = "All" | "Active" | "Completed";


function App() {


    let [tasks1, setTasks1] = useState(
        [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReJS", isDone: false},
            {id: v1(), title: "ReatJS", isDone: false},
            {id: v1(), title: "ReS", isDone: false}
        ]
    );

     const addTask=(title:string)=>{
let newTask={id:v1(),title:title,isDone:false}
         setTasks1([newTask,...tasks1])
    }

    let [filter, setFilter] = useState<nameButtonType>('All')


    const removeTasks = (id: string) => {

        tasks1 = tasks1.filter(f => f.id !== id)
        setTasks1(tasks1)
    }
    const changeFilter = (buttonName: nameButtonType) => {

        setFilter(buttonName)
    }

    if (filter === 'Active') {
        tasks1 = tasks1.filter(f => !f.isDone)
    }
    if (filter === 'Completed') {
        tasks1 = tasks1.filter(f => f.isDone)
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasks1}
                addTask={addTask}
                removeTasks={removeTasks}
                changeFilter={changeFilter}/>

        </div>
    );
}

export default App;
