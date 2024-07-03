import React, { useContext } from "react";
import { usercontext } from "./Usecontext";
const Usecontext1 = () => {
  const user = useContext(usercontext);
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default Usecontext1;
