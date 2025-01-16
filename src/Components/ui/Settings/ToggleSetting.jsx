import { faExpand, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ToggleSetting.module.css"
import { useContext, useState } from "react";
import { ThemeContext } from "../../../Context/ThemeContext";

export default function ToggleSetting(){
    const {isDarkMode,toggleThemeMode}=useContext(ThemeContext);
    const [isOpen, setIsOpen]=useState(false);
    const colorCode=[
        {color:"#00bcd4", logo:"3"},
        {color:"#ffc107", logo:"2"},
        {color:"#ba021d", logo:"1"},
        {color:`${isDarkMode ? "#fff" : "#333" }`, backgroundColor: `${isDarkMode ? "#333" : "#fff"}`, logo : ''}
    ]
    const displayColorList=()=>{
        return colorCode.map( (color,key)=>{
            return <li
                key={key}
                data-color={color.color}
                data-logo={color.logo}
                style={{ backgroundColor: color.color }}
                onClick={color.logo === "" ? toggleThemeMode : undefined}
            ></li>
        })
    }
    const handleClick=()=>{
        setIsOpen( prevIsOpen=> !prevIsOpen );
    }
    return <div className={classes.setting_container}>
        <div className={classes.toggle_settings}>
            <FontAwesomeIcon icon={faGear} onClick={handleClick}/>
        </div>
        <ul className={`${classes.settings} ${ isOpen ? classes.show : classes.hide}`} id="settings">
            <li data-screen=""><FontAwesomeIcon icon={faExpand}/></li>
            {displayColorList()}
        </ul>
    </div>
}