import { useState } from "react";
import { ThemeContext } from "../utils/context/ThemeContext";

interface ProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
