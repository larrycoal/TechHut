import React from 'react';
import { connect } from "react-redux";
import {Link} from 'react-router-dom'


const Todo = (props) => {
  const {todoList} = props
  
  const showTodoList = ()=>{
      return todoList.map((todo,i)=>(
        <div>
          <li key={i}>
          <Link to={"/additem/"+i}>{todo.name}</Link>
          <span><i class="fa fa-star" aria-hidden="true"style ={{color:"white"}}></i></span>
          <span><i class="fa fa-trash" aria-hidden="true"></i></span>
          </li>
        </div>
      ))
  }



    return (
        <div className="todo-wrapper">
          <h3>Your Todo List</h3>
          <ul className="todoList">
          {showTodoList()}
          </ul>
        </div>
    );
};

const mapStateToProps = (state)=>{
return state
}
export default connect(mapStateToProps)(Todo);