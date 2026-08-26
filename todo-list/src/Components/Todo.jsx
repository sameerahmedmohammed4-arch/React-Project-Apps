import React from 'react'
import { useState } from 'react';

function Todo() {
  const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editTask, setEditTask] = useState("");
    
//   todos = ["Learn React", "Practice JS"]

// Click Edit on "Practice JS"

// editIndex = 1
// editTask = "Practice JS"

// Edit button
//     ↓
// editTodo(index)
//     ↓
// setEditIndex(index)
//     ↓
// setEditTask(editTask)

    const editTodo  = (index) => {
      if(editIndex !== null){
        <input type='text'></input>
      }
      const setEditTask = [...todos];
      updatedTodos[index] = editTask;
      setTodos(updatedTodos)
      setEditIndex(null);
  }
  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
    }
    const deleteTodo = (index) => {
        setTodos(todos.filter((task, i) => i !== index));
    };


  return (
    <div className='container'>
      <h1>TO-DO List App</h1>
      <div className="child">
        <input type="text"
          placeholder='add a todo'
          value={task}
          onChange={(e) => {
            setTask(e.target.value)
          }}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.length === 0 ? (<p>No Tasks Exists </p>)
         : todos.map((todo,index) => {
          return (
              <li key={index}>{todo}
                  <div className="btns">
                      <button onClick={editTodo}>Edit</button>
                  <button onClick={() => {
                      deleteTodo(index)
              }}>Complete</button>
                  </div></li>
          )
        })}
      </ul>
    </div>
  )
}

export default Todo 