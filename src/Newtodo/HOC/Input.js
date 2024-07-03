import React from "react";

const Input = ({ onchangeHandle, value }) => {
  return (
    <div>
      <input
        placeholder="Enter Your Text"
        onChange={onchangeHandle}
        value={value}
      />
    </div>
  );
};

export default Input;
