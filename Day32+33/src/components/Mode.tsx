import React from "react";
import { ThemeContext, ThemeType } from "../ThemeContext";
import { useContext } from "react";

function Mode() {
  const { theme, setTheme } = useContext<ThemeType>(ThemeContext);
  return (
    <button
      className={theme?"Mode":"Mode Dark"}
      onClick={() => {
        setTheme(!theme);
      }}
    >
      {theme?"Light":"Dark"}
    </button>
  );
}

export default Mode;
