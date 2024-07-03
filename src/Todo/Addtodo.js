import React, { useState } from "react";

const Addtodo = () => {
  const [task, setTask] = useState("");
  const [inputvalue, setInputvalue] = useState([]);
  const [editTask, setEditTask] = useState(null);

  const handleAddtask = () => {
    if (editTask !== null) {
      const updateTask = [...inputvalue];
      updateTask[editTask] = task;
      setInputvalue(updateTask);
      setEditTask(null);
      setTask("");
    } else {
      setInputvalue([...inputvalue, task]);
      setTask("");
    }
  };
  const handleDeletebutton = (index) => {
    const deletetask = [...inputvalue];
    deletetask.splice(index, 1);
    setInputvalue(deletetask);
    setTask("");
  };
  const handleEditbutton = (index) => {
    setEditTask(index);
    setTask(inputvalue[index]);
  };

  return (
    <div>
      <input onChange={(e) => setTask(e.target.value)} value={task} />
      <button onClick={handleAddtask}>Add</button>
      <div>
        {inputvalue.map((val, id) => (
          <ul>
            <li>
              {val}
              <button onClick={() => handleDeletebutton(id)}>Delete</button>
              <button onClick={() => handleEditbutton(id)}>Edit</button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Addtodo;
