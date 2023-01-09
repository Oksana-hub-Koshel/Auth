import React, {useState} from 'react';
import Task from "./Task";

const TodoList = () => {
    const [newTask, setNewTask]=useState('')
    const [todoList, setTodoList]=useState([])

    const addTask = () => {
        const task={
            id: todoList.length ===0 ? 1 :todoList[todoList.length-1].id + 1,
            taskName: newTask,
            complete: false
        }
        setTodoList(  [...todoList, task])

    }

    const deleteItem = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id))
    }
    const completed = (id) => {
        setTodoList(todoList.map((task) =>{
                if(task.id === id){
                    return (
                        {...task, complete: true}
                    )
                }
                else {
                    return task
                }
            }

        ))
    }
    return (
        <div>
            <input onChange={(event) => setNewTask(event.target.value)}/>
            <button onClick={addTask}>Add Task</button>
            <div>
                {todoList.map(task => {
                    return(

                        <Task
                            task={task.taskName}
                            deleteItem={deleteItem}
                            id={task.id}
                            completed={completed}
                            complete={task.complete}
                        />
                    )})
                }
            </div>
        </div>
    );
};

export default TodoList;

