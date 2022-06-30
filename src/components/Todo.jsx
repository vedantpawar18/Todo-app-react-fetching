import React, { useEffect, useState } from 'react'
import TodoList from './TodoList';

const Todo = () => {
    const [data, setData] =useState ([]);

    const getTodos = async () => {
        try {
            let data= await fetch (`https://jsonplaceholder.typicode.com/todos`)
            data = await data.json();
            console.log(data);
            setData(data);
        }
        catch (err){
            console.log(err)
        }
    }

    useEffect ( () => {
        getTodos();
    }, [])

  return (
    <div>
        <h1>Todo App</h1>
        <button onClick={getTodos}>Fetch</button>
        <div>
            {data.map(todo =>
                <div key={todo.id} style={{display:"flex", gap:"1rem"}}>
                    <div>{todo.id}</div>
                    <div>{todo.title}</div>
                    <div>{todo.status ? "Done": "Not DOne"}</div>
                </div>)}
        </div>
        <div>
            {
                data.map(todo =>
                    <TodoList key={todo.id} id={todo.id} title={todo.title} status={todo.status} /> 
                    )
            }
           
        </div>
    </div>
  )
}

export default Todo