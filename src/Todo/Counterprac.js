import React, { useState } from "react";

const Counterprac = () => {
  const [counter, setCounter] = useState(0);

  const handleincbutton = () => {
    setCounter((prevcounter) => prevcounter + 1);
  };
  const handledecbutton = () => {
    if (counter > 0) {
      setCounter((prevcounter) => prevcounter - 1);
    }
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handledecbutton}>DEC</button>
      <button onClick={handleincbutton}>INC</button>
    </div>
  );
};

export default Counterprac;
