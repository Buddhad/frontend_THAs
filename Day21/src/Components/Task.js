import React, { useState, useEffect } from "react";
import Data from "./Data";
// import Button from './Button'

const Task = (props) => {
  const [value, setValue] = useState("");
  const [cal, setCal] = useState("");
  const [tasks, setTask] = useState([
    "Complete tha day 13",
    "Complete tha day 14",
  ]); 
  const [num, setNum] = useState([
    "You have consumed 5 calories",
    "Complete tha day 14",
  ]);
  useEffect(()=>{
    setTask([]);
    // setNum([]);
  },[]);
  return (
    <div>
      <input
        type="text" placeholder="Item Name"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      /> 
      <input
        type="number" placeholder="Calorie amount"
        onChange={(e) => {
          setCal(e.target.cal);
        }}
        cal={cal}
      />
      <button
        className="btn"
        onClick={() => {
          setTask([...tasks, value]);
          setNum([...num, cal]);
          // console.log(value);
          // console.log(cal);
          setValue("");
          setCal("");
        }}
      >
        {/* {" "} */}
        Add
      </button>

      {tasks.map((task, index) => (
        <Data
          key={index}
          task={task}
          // cal={cal}
          tasks={tasks}
          // num={num}
          setTask={setTask}
          // setNum={setNum}
          index={index}
        />
      ))}
    </div>
  );
};

export default Task;
