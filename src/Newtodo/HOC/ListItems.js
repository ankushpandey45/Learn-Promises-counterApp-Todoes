import React from "react";

const ListItems = ({ handleEditTask, handleDeleteBtn, inputval }) => {
  return (
    <div>
      {inputval.map((item, id) => (
        <div>
          <ul key={id} style={{ listStyle: "none" }}>
            <div style={{ display: "flex" }}>
              <div>
                <li>{item}</li>
              </div>
              <div>
                <li>
                  <button onClick={() => handleDeleteBtn(id)}>Delete</button>
                </li>
              </div>
              <div>
                <li>
                  <button onClick={() => handleEditTask(id)}>Edit</button>
                </li>
              </div>
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ListItems;
