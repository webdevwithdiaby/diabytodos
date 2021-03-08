import React from "react";
import Header from "./components/header/header.component";
import TodoList from "./components/todo-list/todo-list.component";

const App = () => {
  return (
    <div className="app">
      <Header />
      <TodoList />
      
    </div>
  );
};

export default App;
