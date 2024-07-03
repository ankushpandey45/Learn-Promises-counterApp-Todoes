import React, { useState } from "react";

const Todopractise = () => {
  const [task, setTask] = useState("");
  const [inputval, setInputval] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [btnName, setBtnName] = useState("Add");
  const functionForAddButton = () => {
    if (editTask != null) {
      const updateTask = [...inputval];
      updateTask[editTask] = task;
      setInputval(updateTask);
      setBtnName("Add");
      setTask("");
    } else {
      setInputval([...inputval, task]);
      setTask("");
    }
  };
  const funtionForEditTask = (id) => {
    setEditTask(id);
    setTask(inputval[id]);
    setBtnName("Edit");
  };
  const fucntionForDeleteTask = (id) => {
    const deleteTask = [...inputval];
    deleteTask.splice(id, 1);
    setInputval(deleteTask);
  };
  return (
    <div>
      <div>
        <input onChange={(e) => setTask(e.target.value)} value={task} />
        <button onClick={functionForAddButton}>{btnName}</button>
      </div>
      <div>
        {inputval.map((item, id) => (
          <ul key={id}>
            <li>{item}</li>
            <button onClick={() => fucntionForDeleteTask(id)}>Delete</button>
            <button onClick={() => funtionForEditTask(id)}>Edit</button>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Todopractise;
