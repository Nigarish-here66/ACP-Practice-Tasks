import React, { useState } from "react";
import "./TaskManager.css";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [assignee, setAssignee] = useState("");

  const addTask = () => {
    if (task !== "" && assignee !== "") {
      setTasks([...tasks, { task, assignee, completed: false }]);
      setTask("");
      setAssignee("");
    }
  };

  const removeTask = (index) => {
    if (window.confirm("Do you really want to remove this task?")) {
      setTasks(tasks.filter((_, i) => i !== index));
    }
  };

  const completeTask = (index) => {
    setTasks(
      tasks.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="task-manager">

      <h2>My Task Manager</h2>

      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="text"
          placeholder="To whom is the task assigned to"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        />
        <button className="add-button" onClick={addTask}>Add Task</button>
      </div>

      <div className="task-list">
        {tasks.map((t, index) => (
          <div key={index} className="task-item">
            <span className={t.completed ? "completed" : ""}>{t.task}</span>
            <span className="assignee"> (Assigned to: {t.assignee})</span>
          
            <button
              className="complete-button"
              onClick={() => completeTask(index)}
              disabled={t.completed}>
              {t.completed ? "Completed" : "Complete"}
            </button>

            <button className="remove-button" onClick={() => removeTask(index)}>Remove</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TaskManager;
