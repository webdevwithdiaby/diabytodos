import React from "react";
import CustomCheckbox from "../custom-checkbox/custom-checkbox.component";

import {ReactComponent as CrossLogo} from '../../assets/icon-cross.svg';

const Todo = () => {
  return (
    <div className="todo">
      <CustomCheckbox />
      <h2 className='todo__title' > Todo title </h2>
      <CrossLogo/>  
    </div>
  );
};

export default Todo;
