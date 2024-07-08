import React, { useRef, useState, useEffect } from "react";

const Countermachine1 = () => {
  const [counter, setCounter] = useState(25);
  const [startcounter, setStartcounter] = useState(false);

  const interval = useRef;
  useEffect(() => {
    if (startcounter) {
      interval.current = setInterval(() => {
        if (counter > 0) {
          setCounter((count) => count - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval.current);
    }

    return () => {
      clearInterval(interval.current);
    };
  }, [counter, startcounter, interval]);

  const handleStartbtn = () => {
    setStartcounter(!startcounter);
  };
  const handleRestart = () => {
    setCounter(25);
    setStartcounter(false);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleStartbtn}>
        {startcounter ? "pause" : "start"}
      </button>
      <button onClick={handleRestart}>Reset</button>
    </div>
  );
};

export default Countermachine1;
