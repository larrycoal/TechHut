import React from "react";
//import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {createStore} from 'redux'
import reducer from "./Store/reducer";
import Home from "./Component/Home";
const App = () => {
  return (
    <Provider store={createStore(reducer)} >
        <Home />
    </Provider>
  );
};

export default App;
