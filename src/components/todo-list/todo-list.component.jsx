import React from "react";
import Todo from "../todo/todo.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTodosForDisplay } from "../../redux/todos/todos.selectors";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      <div className="wrapper">
        <div className="todo-list__container todo-list__container1">
          {todos.map((t) => (
            <Todo key={t.id} todo={t} />
          ))}
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

const mapStateToProps = createStructuredSelector({
  todos: selectTodosForDisplay,
});

export default connect(mapStateToProps)(TodoList);
