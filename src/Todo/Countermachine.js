import React, { useState, useRef, useEffect } from "react";

const Countermachine = () => {
  const [counter, setCounter] = useState(25);
  const [isActive, setIsActive] = useState(false);
  const interval = useRef(null);

  useEffect(() => {
    if (isActive) {
      interval.current = setInterval(() => {
        setCounter((Counter) => Counter - 1);
      }, 1000);
    } else {
      clearInterval(interval.current);
    }
    return () => clearInterval(interval.current);
  }, [isActive]);

  const handleButton = () => {
    setIsActive(!isActive);
  };

  const handleResetbtn = () => {
    setIsActive(false);
    setCounter(25);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleResetbtn}>Reset</button>
      <button onClick={handleButton}>{isActive ? "Pause" : "Start"}</button>
    </div>
  );
};

export default Countermachine;
