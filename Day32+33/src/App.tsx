import "./App.css";
import Mode from "./components/Mode";
import TodoList from "./components/TodoList";
import { ThemeContext } from "./ThemeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme ? "App Dark" : "App"}>
        <TodoList />
        <Mode />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
