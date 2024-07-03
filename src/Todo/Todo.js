import React, { useState } from "react";
// import Addtodo from "./Addtodo";
// import Counter from "./Counter";
// import Countermachine from "./Countermachine";
// import Todoprac from "./Todoprac";
// import Counterprac from "./Counterprac";
// import Cuntermachineprac from "./Cuntermachineprac";
// import Usecontext from "./Usecontext";
import Todo2 from "./Todo2";
// import Cards from "../Cards/Cards";
const Todo = () => {
  // const [task, setTask] = useState("");
  // const [inputval, setInputval] = useState([]);
  // const [editTask, setEdittask] = useState(null);
  // const addtask = (e) => {
  //   setTask(e.target.value);
  // };
  // const handleAddbutton = () => {
  //   if (editTask !== null) {
  //     const updateTask = [...inputval];
  //     updateTask[editTask] = task;
  //     setInputval(updateTask);
  //     setEdittask(null);
  //     setTask("");
  //   } else {
  //     setInputval([...inputval, task]);
  //     setTask("");
  //   }
  // };
  // const handleDeletebutton = (id) => {
  //   const deletetask = [...inputval];
  //   deletetask.splice(id, 1);
  //   setInputval(deletetask);
  // };
  // const handleEditbutton = (id) => {
  //   setEdittask(id);
  //   setTask(inputval[id]);
  // };
  return (
    <div>
      {/* <Addtodo /> */}
      {/* <input onChange={addtask} value={task} />
      <button onClick={handleAddbutton}>Add</button>
      <div>
        {inputval.map((val, id) => (
          <ul>
            <li key={id}>
              {val}
              <button onClick={() => handleDeletebutton(id)}>Delete</button>
              <button onClick={() => handleEditbutton(id)}>Edit</button>
            </li>
          </ul>
        ))}
      </div> */}
      {/* <Counter />
      <div>
        <Countermachine />
      </div>
      <div>
        <Todoprac />
      </div>
      <div>
        <Counterprac />
      </div>
      <div>
        <Cuntermachineprac />
      </div>
      <div>
        <Usecontext />
      </div> */}
      {/* <div>
        <Cards/>
      </div> */}
      <div>
        <Todo2 />
      </div>
    </div>
  );
};

export default Todo;
