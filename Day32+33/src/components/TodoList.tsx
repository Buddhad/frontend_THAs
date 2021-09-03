import React from "react";
import { useState,useContext } from "react";
import { ThemeContext,ThemeType } from "../ThemeContext";

function TodoList() {
  const [todos, settodo] = useState<string[]>([]);
  const [Inp, setInp] = useState<string>("");
  const {theme} = useContext<ThemeType>(ThemeContext)
  return (
    <div className="TodoList">
      <div className="Search">
        <input
          type="text"
          value={Inp}
          placeholder="Enter a Todo"
          onChange={(e) => {
            setInp(e.target.value);
          }}
        />
        <button className={theme?"":"Dark"}
          onClick={() => {
            Inp.length>0?settodo([...todos, Inp]):alert("Please enter a todo")
            setInp("")
          }}
        >
          Add Todo
        </button>
      </div>

      {todos.length>0?todos.map((todo, index) => (
        <div key={index }className="todo">{todo}</div>
      )):<h1>No todo</h1>}
    </div>
  );
}

export default TodoList;
