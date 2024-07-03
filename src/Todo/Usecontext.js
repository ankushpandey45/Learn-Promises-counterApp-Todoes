import React, { createContext } from "react";
import Usecontext1 from "./Usecontext1";
export const usercontext = createContext();
const Usecontext = () => {
  const user = "ankush";
  return (
    <div>
      <usercontext.Provider value={user}>
        <Usecontext1 />
      </usercontext.Provider>
    </div>
  );
};

export default Usecontext;
