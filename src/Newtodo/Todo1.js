import React, { useState } from "react";

const Todo1 = () => {
  const [lists, setLists] = useState("");
  const [inputTasks, setInputTasks] = useState([]);
  const [editTsk, setEditTsk] = useState(null);
  const [btnName, setBtnName] = useState("Add");
  const handleAddbutton = () => {
    if (editTsk !== null) {
      const updateTask = [...inputTasks];
      updateTask[editTsk] = lists;
      setInputTasks(updateTask);
      setEditTsk(null);
      setLists("");
      setBtnName("Add");
    } else {
      setInputTasks([...inputTasks, lists]);
      setLists("");
    }
  };
  const handleDeletebutton = (id) => {
    const deleteTask = [...inputTasks];
    deleteTask.splice(id, 1);
    setInputTasks(deleteTask);
  };
  const handleEditbutton = (id) => {
    setEditTsk(id);
    setLists(inputTasks[id]);
    setBtnName("Edit");
  };
  return (
    <div>
      <input onChange={(e) => setLists(e.target.value)} value={lists} />
      <button onClick={handleAddbutton}>{btnName}</button>
      <div>
        {inputTasks.map((val, id) => (
          <ul>
            <li key={id}>
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

export default Todo1;
