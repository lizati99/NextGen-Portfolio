import { createContext, useEffect, useState } from "react";
import MODE from "./../utils/color";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("mode");
    return storedMode ? JSON.parse(storedMode) : true;
  });
  const [color, setColor] = useState(() => {
    return localStorage.getItem("color-secondary") || MODE.secondaryColor;
  });

  useEffect(() => {
    const root = document.documentElement;
    const themeColors = isDarkMode ? MODE.dark : MODE.light;

    root.style.setProperty("--color-bg", themeColors.backgroundColor);
    root.style.setProperty("--color-text", themeColors.textColor);
    root.style.setProperty("--color-overlay", themeColors.overlayColor);

    localStorage.setItem("mode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    if (color) {
      const root = document.documentElement;
      root.style.setProperty("--color-secondary", color);
      localStorage.setItem("color-secondary", color);
    }
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
