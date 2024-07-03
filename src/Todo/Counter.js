import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleInc = () => {
    setCounter(counter + 1);
  };
  const handleDec = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <h1>{counter}</h1>
      <div>
        <button onClick={handleDec}>DEC</button>
        <button onClick={handleInc}>INC</button>
      </div>
    </div>
  );
};

export default Counter;
