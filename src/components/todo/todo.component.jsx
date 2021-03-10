import React from "react";

import { ReactComponent as CrossLogo } from "../../assets/icon-cross.svg";

import { connect } from "react-redux";
import { setCompleted } from "../../redux/todos/todos.actions";

import {deleteTodo} from '../../redux/todos/todos.actions';

const Todo = ({ todo, setCompleted, deleteTodo }) => {
  const { title, isCompleted } = todo;
  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => setCompleted(todo)}
      />
      <h2 className={`todo__title ${isCompleted ? "todo__completed" : null}`}>
        {" "}
        {title}{" "}
      </h2>
      <CrossLogo onClick={ () => deleteTodo(todo) } />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCompleted: (todo) => dispatch(setCompleted(todo)),
  deleteTodo: todo => dispatch(deleteTodo(todo))
});

export default connect(null, mapDispatchToProps)(Todo);
