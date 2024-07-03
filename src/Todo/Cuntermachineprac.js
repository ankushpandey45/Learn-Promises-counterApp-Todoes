import React, { useRef, useState, useEffect } from "react";

const Cuntermachineprac = () => {
  const [counter, setCounter] = useState(30);
  const [iscounter, setIscounter] = useState(false);
  const interval = useRef;
  useEffect(() => {
    if (iscounter) {
      interval.current = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
    } else {
      clearInterval(interval.current);
    }

    return () => {
      clearInterval(interval.current);
    };
  }, [iscounter, interval, counter]);
  const handleButton = () => {
    setIscounter(!iscounter);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleButton}>{iscounter ? "pause" : "start"}</button>
    </div>
  );
};

export default Cuntermachineprac;
