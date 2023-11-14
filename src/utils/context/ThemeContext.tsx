import { createContext } from "react";

interface ThemeProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeProps>({
  theme: "light",
  toggleTheme: () => {},
});
