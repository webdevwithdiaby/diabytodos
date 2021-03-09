import React from "react";

const CustomCheckbox = ({ isCompleted, ...props }) => {
  return (
    <input
      className="custom(checkbox"
      type="checkbox"
      {...props}
      checked={isCompleted}
    />
  );
};

export default CustomCheckbox;
