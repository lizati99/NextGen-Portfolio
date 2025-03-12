import classes from "./ColorToggle.module.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../Context/ThemeContext";
import MODE from "./../../../utils/color";

export default function ColorToggle(){
    const { isDarkMode, toggleThemeMode, toggleColors } = useContext(ThemeContext);
    const [activeColor, setActiveColor]=useState("");
    const themeColors = isDarkMode ? MODE.dark : MODE.light;
    useEffect(() =>{
        if(localStorage.getItem("colorData")){
          const storedData = JSON.parse(localStorage.getItem("colorData"));
          setActiveColor(storedData.color)
        } else {
          toggleColors(themeColors.COLORS[0].color)
        }
      },[]);
    const displayColorList = () => {
        return themeColors.COLORS.map((color, key) => {
          return (
            <div
              key={key}
              style={{ backgroundColor: color.color }}
              className={activeColor === color.color ? classes.active : ""}
              onClick={ () => { 
                (color.logo === "") ? toggleThemeMode() : toggleColors(color.color)
                setActiveColor(color.color)
              }}
            ></div>
          );
        });
      };
    return <>
        <div className={classes.setting_item}>
          {displayColorList()}
        </div>
    </>
}