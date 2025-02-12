import { createContext, useEffect, useState } from "react";
import MODE from "./../utils/color";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("mode");
    return storedMode ? JSON.parse(storedMode) : true;
  });

  const getDefaultColorData = (mode) => {
    const theme = mode ? MODE.dark : MODE.light;
    return theme.COLORS[0] || {}; 
  };

  const [colorData, setColorData] = useState(() => {
    const storedData = localStorage.getItem("colorData");
    return storedData ? JSON.parse(storedData) : getDefaultColorData(true);
  });

  useEffect(() => {
    const root = document.documentElement;
    const themeColors = isDarkMode ? MODE.dark : MODE.light;

    root.style.setProperty("--color-bg", themeColors.backgroundColor);
    root.style.setProperty("--color-text", themeColors.textColor);
    root.style.setProperty("--color-overlay", themeColors.overlayColor);

    localStorage.setItem("mode", JSON.stringify(isDarkMode));

    // setColorData(getDefaultColorData(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    if (colorData.color) {
      const root = document.documentElement;
      root.style.setProperty("--color-secondary", colorData.color);
      localStorage.setItem("colorData", JSON.stringify(colorData));
    }
  }, [colorData]);

  const toggleThemeMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const toggleColors = (colorCode) => {
    const newColorData = (isDarkMode ? MODE.dark.COLORS : MODE.light.COLORS).find(
      (item) => item.color === colorCode
    );
    if (newColorData) {
      setColorData(newColorData);
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleThemeMode, colorData, toggleColors }}>
      {children}
    </ThemeContext.Provider>
  );
};
