import React, { useState } from "react";

const ChildComponent: React.FC = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const addtask = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (indexToDelete: number) => {
    const updatedTaskList = taskList.filter(
      (_, index) => index !== indexToDelete
    );
    setTaskList(updatedTaskList);
  };

  return (
    <div>
      <h1 className="display-6">Child Component</h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Type the name..."
            className="form-control"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="btn btn-primary mt-2" onClick={addtask}>
            Add Task
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <ul className="list-group">
            {taskList.map((task, index) => (
              <li key={index} className="list-group-item">
                {task}{" "}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteTask(index)}
                >
                  (-)
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChildComponent;
