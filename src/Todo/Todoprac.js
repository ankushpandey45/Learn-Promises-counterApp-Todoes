import { useState } from "react";

const Todoprac = () => {
  const [task, setTask] = useState("");
  const [inputval, setInputval] = useState([]);
  const [edittask, setEdittask] = useState(null);
  const handleAddbutton = () => {
    if (edittask !== null) {
      const updateTask = [...inputval];
      updateTask[edittask] = task;
      setInputval(updateTask);
      setEdittask(null);
      setTask(" ");
    } else {
      setInputval([...inputval, task]);
      setTask(" ");
    }
  };
  const handleDeletebutton = (id) => {
    const deletetask = [...inputval];
    deletetask.splice(id, 1);
    setInputval(deletetask);
  };

  const handleEditbutton = (id) => {
    setEdittask(id);
    setTask(inputval[id]);
  };
  return (
    <div>
      <input onChange={(e) => setTask(e.target.value)} value={task} />
      <button onClick={handleAddbutton}>Add</button>
      <div>
        {inputval.map((item, id) => (
          <ul key={id}>
            <li>{item}</li>
            <button onClick={() => handleDeletebutton(id)}>Delete</button>
            <button onClick={() => handleEditbutton(id)}>Edit</button>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Todoprac;
