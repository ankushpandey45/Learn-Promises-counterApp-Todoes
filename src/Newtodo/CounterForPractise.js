import React from "react";

const TodoForPractise = () => {
  const [counter, setCounter] = useState(0);
  const handleIncButton = () => {
    setCounter((prev) => prev + 1);
  };
  const handleDecButton = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleDecButton}>DEC</button>
      <button onClick={handleIncButton}>INC</button>
    </div>
  );
};

export default TodoForPractise;
