import React from "react";
import Header from "../Header/header";
import Home from './Home'
import CreateTodo from '../CreateTodo'


const index = () => {
  return (
    <div className="home-wrapper">
      <Header />
      <CreateTodo/>
      <Home/>
    </div>
  );
};

export default index;
