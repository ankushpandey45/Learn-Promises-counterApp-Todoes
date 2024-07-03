import { useState } from "react";
import Button from "./Button";
import Button1 from "./Button1";
const Counter2 = () => {
  const [counter, setCounter] = useState(0);
  const handleInc = () => {
    setCounter((prevcounter) => prevcounter + 1);
  };
  const handleDec = () => {
    if (counter > 0) setCounter((prevcounter) => prevcounter - 1);
  };

  return (
    <div>
      {counter}
      <div>
        <Button props={handleDec} />
        <Button1 props={handleInc} />
      </div>
    </div>
  );
};

export default Counter2;
