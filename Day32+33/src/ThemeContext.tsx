import { createContext } from "react";

export interface ThemeType {
  theme: boolean;
  setTheme: (theme: boolean) => void;
}

const initialState: ThemeType = {
  theme: false,
  setTheme: (theme: boolean) => {},
};

export const ThemeContext = createContext<ThemeType>(initialState);
