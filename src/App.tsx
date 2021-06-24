import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    const todoList1 = v1()
    const todoList2 = v1()

    type TodoListType = {
        id: string
        title: string
        filter: string

    }

    type TaskStateType = {
        [key: string]: Array<TaskType>
    }
    let [todoLists, setTodoLists] = useState<Array<TodoListType>>([
        {id: todoList1, title: 'What to learn', filter: 'all'},
        {id: todoList2, title: 'What to buy', filter: 'all'}
    ])

    let [tasks, setTasks] = useState<TaskStateType>({
        [todoList1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false}],
        [todoList2]: [
            {id: v1(), title: "1", isDone: true},
            {id: v1(), title: "2", isDone: true},
            {id: v1(), title: "3", isDone: false},
            {id: v1(), title: "4", isDone: false},
            {id: v1(), title: "5", isDone: false}],
    });

    function removeTask(Taskid: string, TodoListId: string) {
        tasks[TodoListId] = tasks[TodoListId].filter(t => t.id !== Taskid);
        setTasks({...tasks});
    }

    function isDoneChange(id: string, event: boolean, TodoListId: string) {
        let newChange = tasks[TodoListId].find(f => id === f.id)
        if (newChange) {

            newChange.isDone = event
            setTasks({...tasks})
        }
    }

    function addTask(title: string, TodoListID: string) {
        let task = {id: v1(), title: title, isDone: false};
        tasks[TodoListID] = [task, ...tasks[TodoListID]];
        setTasks(tasks);
    }


    function changeFilterTodoList(value: FilterValuesType, TodoListID: string) {
        setTodoLists(todoLists.map(todolist => todolist.id === TodoListID ? {...todolist, filter: value} : todolist));
    }

    const DelTodoList = (TodoListID: string) => {
        setTodoLists(todoLists.filter(todolist => todolist.id !== TodoListID))
        delete tasks[TodoListID]
    }


    const todolistElements = todoLists.map(todolist => {


        let tasksForTodolist = tasks[todolist.id];

        if (todolist.filter === "active") {
            tasksForTodolist = tasks[todolist.id].filter(t => t.isDone === false);
        }
        if (todolist.filter === "completed") {
            tasksForTodolist = tasks[todolist.id].filter(t => t.isDone === true);
        }

        return (<Todolist title={todolist.title}
                          tasks={tasksForTodolist}
                          removeTask={removeTask}
                          changeFilterTodoList={changeFilterTodoList}
                          addTask={addTask}
                          isDoneChange={isDoneChange}
                          DelTodoList={DelTodoList}
                          TodoListId={todolist.id}/>)
    })


    return (
        <div className="App">
            {todolistElements}

        </div>
    );
}

export default App;
