import React, { useEffect, useState } from 'react'
import TodoCard from './TodoCard'

const TodoContainer = () => {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        console.log(todoList);
    },[todoList]);

    useEffect(() => {
        getTodos();
    }, []);
    const getTodos = async () => {
        const data = await fetch('https://dummyjson.com/todos')
        const todoData = await data.json();
        setTodoList(todoData.todos);
        // console.log(todoList);
    }
  return (
    <div>
        {todoList.map( (data) => (
             <TodoCard data={data} />
        ))}
    </div>
  )
}

export default TodoContainer