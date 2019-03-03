import React, { useState } from 'react';
import './App.css';

// fancy destructuring of props
function Todo({ todo, index, completeTodo }) {
  return (
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo">
      {todo.text}
      <div>
        <button onClick={()=> completeTodo(index)}>Complete</button>
      </div>
    </div>
  )
}

function TodoForm({addTodo}) {
  const [value, magic] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    if(value.length<2) return;
    addTodo(value);
    magic('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} onChange={e => magic(e.target.value)}></input>
    </form>
  )
}



// Todo alternate structures:

// no destructuring
function Xp(props){
  return(
    <div>XP{props.todo.text}</div>
  )
}
// some
function Xxp(props){
  const { todo } = props;
  return(
    <div>XXP{todo.text}</div>
  )
}

// more

function Xxxp({todo}){
  return <div>mage {todo.text}</div>
}
// most

function Xxxxp({todo, index, key}){
  return <div>mage {index}{todo.text}{key}</div>
}

//   MAIN APPLICATION 

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false,
    },
    {
      text: 'Go to the beach',
      isCompleted: false,
    },
    {
      text: 'Learn Calculus',
      isCompleted: false,
    },
    {
      text: 'Study Machine Learning',
      isCompleted: false,
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const nice = {
    "background": "blue",
    "color": "gold",
    "fontSize": "2vw",
    "display": "inline-block",
  }

  const Footer = ()=> {
    return (
      <div style={nice}>
        <a href="https://maxjann.com">Jann Software</a>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((thing,spot)=> (
          <Todo key={spot} index={spot} todo={thing} completeTodo={completeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
      < Footer />
    </div>
  )
}

export default App;