import React, { useState, useEffect } from "react";
import Data from "./Data";
// import Button from './Button'

const Task = (props) => {
  const [value, setValue] = useState("");
  const [tasks, setTask] = useState([
    "Complete tha day 13",
    "Complete tha day 14",
  ]);
  useEffect(()=>{
    setTask([]);
  },[]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <button
        className="btn"
        onClick={() => {
          setTask([...tasks, value]);
          // console.log(value);
          setValue("");
        }}
      >
        {" "}
        Add
      </button>

      {tasks.map((task, index) => (
        <Data
          key={index}
          task={task}
          tasks={tasks}
          setTask={setTask}
          index={index}
        />
      ))}
    </div>
  );
};

export default Task;
