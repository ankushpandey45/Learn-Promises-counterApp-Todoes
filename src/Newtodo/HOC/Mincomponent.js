import React, { useState } from "react";
import Input from "./Input";
import Buttons from "./Buttons";
import ListItems from "./ListItems";

const Mincomponent = () => {
  const [task, setTask] = useState("");
  const [inputval, setInputval] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [btnName, setBtnName] = useState("Add Task");
  const onchangeHandle = (e) => {
    setTask(e.target.value);
  };
  const handleAddbtn = () => {
    if (editTask != null) {
      const updateTask = [...inputval];
      updateTask[editTask] = task;
      setInputval(updateTask);
      setBtnName("Add Task");
      setTask("");
    } else {
      setInputval([...inputval, task]);
      setTask("");
    }
  };
  const handleEditTask = (id) => {
    setEditTask(id);
    setTask(inputval, [id]);
    setBtnName("Edit Task");
  };
  const handleDeleteBtn = (id) => {
    const DeleteTask = [...inputval];
    DeleteTask.splice(id, 1);
    setInputval(DeleteTask);
  };
  return (
    <div>
      <div>
        <div style={{ display: "flex" }}>
          <div>
            <Input onchangeHandle={onchangeHandle} value={task} />
          </div>
          <div>
            <Buttons handleAddbtn={handleAddbtn} btnName={btnName} />
          </div>
        </div>
      </div>
      <div>
        <ListItems
          handleEditTask={handleEditTask}
          handleDeleteBtn={handleDeleteBtn}
          inputval={inputval}
        />
      </div>
    </div>
  );
};

export default Mincomponent;
