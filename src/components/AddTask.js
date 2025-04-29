import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      onAdd(input);
      setInput("");
    }
  };

  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
      <input
        type="text" value={input}
        onChange={(e) => setInput(e.target.value)} placeholder="Enter task"
        style={{ flex: 1, padding: "8px" }}  />
      <button onClick={handleAdd} style={{ padding: "8px" }}>
        Add
      </button>
    </div>
  );
};

export default AddTask;
