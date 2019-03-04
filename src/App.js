import React, { useState } from 'react';
import './App.css';

// to adjust responsiveness of text i can create a variable like .7 and then hmmm
// can you reorder the list?
// can you click a div without overriding children onclicks?


// fancy destructuring of props
function Todo({ todo, index, completeTodo, deleteTodo, highlightTodo }) {
  return (

    <div style={{textDecoration: todo.isCompleted ? 'line-through' : '', color: todo.isHighlighted ? 'blue' : 'black'}} className="todo">
      {todo.text}
      <div >
        <button onClick={()=> completeTodo(index)}>Complete</button>
        <button onClick={()=> deleteTodo(index)}>x</button>
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
      <input type="text" className="input" placeholder="Add Todo..." value={value} onChange={e => magic(e.target.value)}></input>
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
      isHighlighted: false,
    },
    {
      text: 'Go to the beach',
      isCompleted: false,
      isHighlighted: false,
    },
    {
      text: 'Learn Calculus',
      isCompleted: false,
      isHighlighted: false,
    },
    {
      text: 'Study Machine Learning',
      isCompleted: false,
      isHighlighted: false,
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    newTodos[index].isHighlighted = true;

    setTodos(newTodos);
  }

  const deleteTodo = index => {
    const newTodos = [...todos].filter((thing,spot)=>spot!=index);
    setTodos(newTodos);
  }

  const highlightTodo = index => {
    console.log(`highlighting ${index}`);
    const newTodos = [...todos];
    newTodos[index].isHighlighted = true;
    setTodos(newTodos);
  }

  const nice = {
    "background": "rebeccapurple",
    "color": "aliceblue",
    "fontSize": "22px",
    "display": "inline-block",
    "padding": "1vw",
    "margin": ".5vw auto",
    "width": "100%",
    "textAlign": "center",
  }

  const Footer = ()=> {
    return (
      <div style={nice}>
        &copy; <a href="https://maxjann.com">Jann Software</a> <span className="strange">2019</span>
      </div>
    )
  }

  const Header = ()=> {
    return (
      <div style={nice}>
        <h1><span className="strange">R</span><span className="strange">e</span><span className="strange">a</span><span className="strange">c</span><span className="strange">t</span> <span className="strange">H</span><span className="strange">o</span><span className="strange">o</span><span className="strange">k</span><span className="strange">s</span></h1>
        <p> <span className="strange">No</span> <span className="strange">classes</span> <span className="strange">were</span> <span className="strange">used</span> <span className="strange">in</span> <span className="strange">the</span> <span className="strange">making</span>  <span className="strange">of</span> <span className="strange">this</span> <span className="strange">website</span>.</p>
      </div>
    )
  }

  return (
    <div className="app">
      < Header />
      <div className="todo-list">
        {todos.map((thing,spot)=> (
          <Todo key={spot} index={spot} todo={thing} completeTodo={completeTodo} deleteTodo={deleteTodo} highlightTodo={highlightTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
      < Footer />
    </div>
  )
}

export default App;