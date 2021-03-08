import React from "react";
import Todo from "../todo/todo.component";

const TodoList = () => {
  return (
    <div className="todo-list">
      <div className="wrapper">
        <div className="todo-list__container todo-list__container1">
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <div className="info">
            <p>3 items left</p>
            <p>Clear Completed</p>
          </div>
        </div>
        <div className="todo-list__container todo-list__container2">
          <div className="box">
            <p>All</p>
            <p>Active</p>
            <p>Completed</p>
          </div>
        </div>
        <div className="todo-list__hint-container">
          <p> Drag and drop to reorder list </p>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
