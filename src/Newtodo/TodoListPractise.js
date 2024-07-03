import React, { useState } from "react";

const TodoListPractise = () => {
  const [task, setTask] = useState("");
  const [editTask, setEditTask] = useState(null);
  const [inputVal, setInputVal] = useState([]);
  const [btnName, setBtnName] = useState("Add");
  const handleAddbtn = () => {
    if (editTask != null) {
      const updateTask = [...inputVal];
      updateTask[editTask] = task;
      setInputVal(updateTask);
      setEditTask(null);
      setTask("");
      setBtnName("Add");
    } else {
      setInputVal([...inputVal, task]);
      setTask("");
    }
  };
  const hanldeDeleteTask = (id) => {
    const deleteTask = [...inputVal];
    deleteTask.splice(id, 1);
    setInputVal(deleteTask);
  };
  const handleEditTask = (id) => {
    setEditTask(id);
    setTask([inputVal], id);
    setBtnName("Edit");
  };
  return (
    <div>
      <input onChange={(e) => setTask(e.target.value)} value={task} />
      <button onClick={handleAddbtn}>{btnName}</button>
      <div>
        {inputVal.map((ele, id) => (
          <div key={id}>
            <ul>
              <li>{ele}</li>
              <li>
                <button onClick={() => hanldeDeleteTask(id)}>Delete</button>
                <button onClick={() => handleEditTask(id)}>Edit</button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoListPractise;
