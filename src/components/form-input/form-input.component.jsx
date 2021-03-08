import React from "react";
import CustomCheckbox from "../custom-checkbox/custom-checkbox.component";

const FormInput = () => {
  return (
    <form className="form">
      <CustomCheckbox />
      <input type="text" className="form__input" />
    </form>
  );
};

export default FormInput;
