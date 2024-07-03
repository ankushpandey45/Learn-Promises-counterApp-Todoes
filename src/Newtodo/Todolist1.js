import { useState } from "react";
import Counter2 from "./Counter2";
import Countermachine1 from "./Countermachine1";

const Todolist1 = () => {
  const [task, setTask] = useState("");
  const [inputval, setInputval] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [btnName, setBtnName] = useState("Add");
  const handleAddbtn = () => {
    if (editTask != null) {
      const updateTask = [...inputval];
      updateTask[editTask] = task;
      setInputval(updateTask);
      setEditTask(null);
      setTask("");
      setBtnName("Add");
    } else {
      setInputval([...inputval, task]);
      setTask("");
    }
  };
  const handleDeletebtn = (id) => {
    const deleteTask = [...inputval];
    deleteTask.splice(id, 1);
    setInputval(deleteTask);
  };
  const handleEdittask = (id) => {
    setEditTask(id);
    setTask(inputval[id]);
    setBtnName("Edit");
  };
  return (
    <div>
      <div>
        <input onChange={(e) => setTask(e.target.value)} value={task} />
        <button onClick={handleAddbtn}>{btnName}</button>
      </div>

      <div>
        {inputval.map((val, id) => (
          <ul>
            <li key={id}>
              {val}
              <button onClick={() => handleDeletebtn(id)}>Delete</button>
              <button onClick={() => handleEdittask(id)}>Edit</button>
            </li>
          </ul>
        ))}
      </div>
      <div>
        <Counter2 />
      </div>
      <div>
        <Countermachine1 />
      </div>
    </div>
  );
};

export default Todolist1;
