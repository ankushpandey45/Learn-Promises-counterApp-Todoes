import React from "react";

const Buttons = ({ handleAddbtn,btnName }) => {
  return (
    <div>
      <button onClick={handleAddbtn}>{btnName}</button>
    </div>
  );
};

export default Buttons;
