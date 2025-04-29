import React, { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>To-Do App</h2>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} />
    </div>
  );
}

export default App;
