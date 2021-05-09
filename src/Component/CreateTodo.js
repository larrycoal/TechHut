import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "../Store/actions/todoList";
import Todo from './Todos'


const CreateTodo = (props) => {

  const [todo, setTodo] = useState({
    name:"",
    items:[],
    priority:0
  });

  const [error,setError]=useState(false)
  const handleTodo = (e) => {
    e.preventDefault();
    if( todo.name === ""){
      setError(true)
    }else{
      props.dispatch(createTodo(todo))
      setTodo({
        ...todo,
        name:""
      })
       
    }
  
  };
  const handleChange = (e) => {
    setTodo({
      ...todo,
      name:e.target.value
    });
    setError(false)
  };
  return (
    <div className="create-todo-wrapper">
      <h2>Your Todo List</h2>
      <Todo/>
      <form>
        <input
          type="text"
          name="todoList"
          value={todo.name}
          onChange={(e) => handleChange(e)}
          placeholder="Name of Todo"
          required
        />
        <button onClick={(e) => handleTodo(e)}>Add</button>
      </form>
      {error?<span className="error">Todo can not be blank</span>:""}
    </div>
  );
};

export default connect()(CreateTodo);
