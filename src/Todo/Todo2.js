import React, { useState, useEffect } from "react";
import "./Todo2.css";
const Todo2 = () => {
  const [addtask, setAddtask] = useState("");
  const [inputval, setInputval] = useState([]);
  const [edittask, setEdittask] = useState(null);
  const [btnName, setBtnName] = useState("Add");
 
  
  const handleAddbutton = () => {
    if (edittask !== null) {
      const updateTask = [...inputval];
      updateTask[edittask] = addtask;
      setInputval(updateTask);
      setEdittask(null);
      setAddtask(" ");
      setBtnName("Add");
    } else {
      setInputval([...inputval, addtask]);
      setAddtask(" ");
    }
  };
  const handleDeletebutton = (id) => {
    const deletetask = [...inputval];
    deletetask.splice(id, 1);
    setInputval(deletetask);
  };
  const handleEditbutton = (id) => {
    setEdittask(id);
    setAddtask(inputval[id]);
    setBtnName("Edit");
  };
  return (
    <>
      <div>
        <div className="second_div">
          <div className="container">
            <h1 style={{ color: "black", marginTop: "10px" }}>Todo-List</h1>
            <input
              className="input_area"
              onChange={(e) => setAddtask(e.target.value)}
              value={addtask}
              placeholder="Enter your task"
            />
            <button className="add_btn" onClick={handleAddbutton}>
              {btnName}
            </button>

            <div>
              {inputval.map((val, id) => (
                <ul className="ul_cls">
                  <li className="li_cls" key={id}>
                    <span className="val_span"> {val}</span>
                    <div className="btn_div">
                      <div>
                        <button
                          className="add_btn dlt"
                          onClick={() => handleDeletebutton(id)}
                        >
                          Delete
                        </button>
                      </div>
                      <div>
                        <button
                          className="add_btn edit"
                          onClick={() => handleEditbutton(id)}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo2;
