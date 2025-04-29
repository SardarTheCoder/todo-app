import React from "react";

const TaskList = ({ tasks, onToggle }) => {
  return (
    <ul style={{ listStyle: "none", backgroundColor: "#f9f9f9", borderRadius: "5px", padding: "10px" }}>
      {tasks.map((task) => (
        <li key={task.id} style={{ marginBottom: "10px" }}>
          <label>
            <input
              type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
               <span    style={{marginLeft: "8px",textDecoration: task.completed ? "line-through" : "none",}}>
              {task.text}
            </span>
          </label>
                </li>
      ))}
      </ul>
  );
};

export default TaskList;
