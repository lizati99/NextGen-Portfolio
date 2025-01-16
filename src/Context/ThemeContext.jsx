import { createContext, useEffect, useState } from "react";
import colors from "./../utils/color"

export const ThemeContext=createContext();

export const ThemeProvider=( {children} )=>{
    const [isDarkMode, setIsDarkMode]=useState(true);

    useEffect(() => {
        const root = document.documentElement;
        const themeColors= isDarkMode ? colors.dark : colors.light;

        root.style.setProperty("--color-bg", themeColors.backgroundColor);
        root.style.setProperty("--color-text", themeColors.textColor);
        root.style.setProperty("--color-overlay", themeColors.overlayColor);
        root.style.setProperty("--color-secondary", themeColors.secondaryColor);
        
      }, [isDarkMode]);

    const toggleThemeMode=()=>{
        setIsDarkMode(prevTheme => !prevTheme);
    }
    return <ThemeContext.Provider value={{isDarkMode, toggleThemeMode}}>
        {children}
    </ThemeContext.Provider>

}