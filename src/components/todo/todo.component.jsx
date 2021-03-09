import React from "react";
import CustomCheckbox from "../custom-checkbox/custom-checkbox.component";

import { ReactComponent as CrossLogo } from "../../assets/icon-cross.svg";

const Todo = ({ todo }) => {
  const { title, isCompleted } = todo;
  return (
    <div className="todo">
      <CustomCheckbox isCompleted={isCompleted} />
      <h2 className="todo__title"> {title} </h2>
      <CrossLogo />
    </div>
  );
};

export default Todo;
