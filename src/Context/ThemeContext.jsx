import { createContext, useEffect, useState } from "react";
import MODE from "./../utils/color";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [color, setColor] = useState(MODE.secondaryColor);

  useEffect(() => {
    const root = document.documentElement;
    const themeColors = isDarkMode ? MODE.dark : MODE.light;

    root.style.setProperty("--color-bg", themeColors.backgroundColor);
    root.style.setProperty("--color-text", themeColors.textColor);
    root.style.setProperty("--color-overlay", MODE.overlayColor);
  }, [isDarkMode]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-secondary", color);
  }, [color]);

  const toggleThemeMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const toggleColors = (colorCode) => {
    setColor(colorCode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleThemeMode, toggleColors }}>
      {children}
    </ThemeContext.Provider>
  );
};
