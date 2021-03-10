import React, { useState } from "react";

import { connect } from "react-redux";
import { addTodo } from "../../redux/todos/todos.actions";

const FormInput = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title)
      addTodo({ id: Date.now().toString(), title, isCompleted: false });
    else alert("Title is empty !!");
    setTitle("");
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <button type="submit">add</button>
      <input
        type="text"
        className="form__input"
        value={title}
        onChange={handleChange}
      />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(FormInput);
