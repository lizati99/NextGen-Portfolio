import { faExpand, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ToggleSetting.module.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../Context/ThemeContext";
import MODE from "./../../../utils/color";
import { useLanguage } from "../../../Context/LanguageContext"; 
import moroccoFlag from "./../../../assets/icons/home/morocco.webp"
import britishFlag from "./../../../assets/icons/home/unitedkingdom.webp"
import deutschlandFlag from "./../../../assets/icons/home/germany.webp"

export default function ToggleSetting() {
  const { isDarkMode, toggleThemeMode, toggleColors } = useContext(ThemeContext);
  const { changeLanguage, language } = useLanguage();
  const themeColors = isDarkMode ? MODE.dark : MODE.light;
  const [isOpen, setIsOpen] = useState(false);
  const [activeColor, setActiveColor]=useState("");

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

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={classes.setting_container}>
      <div className={classes.toggle_settings} onClick={handleClick}>
        <FontAwesomeIcon icon={faGear} size="lg"/>
      </div>
      <div
        className={`${classes.settings} ${isOpen ? classes.show : classes.hide}`}
        id="settings"
      >
        <h3 className={classes.setting_title}>Full Screen :</h3>
        <div className={classes.setting_item}>
          <FontAwesomeIcon icon={faExpand} size="lg"/>
        </div>
        
        <h3 className={classes.setting_title}>Colors & Theme :</h3>
        <div className={classes.setting_item}>
          {displayColorList()}
        </div>
        
        <h3 className={classes.setting_title}>Languages :</h3>
        <div className={classes.setting_item}>
          <div 
            className={ language==="ar" ? classes.active : "" }
            onClick={() => changeLanguage("ar")} 
            style={{ cursor: "pointer" }}
          >
            <img src={moroccoFlag} width="20" alt="morocco flag" />
          </div>
          <div
            className={ language==="en" ? classes.active : "" }
            onClick={() => changeLanguage("en")}
            style={{ cursor: "pointer" }}
          >
            <img src={britishFlag} width="20" alt="british flag" />
          </div>
          <div 
            className={ language==="de" ? classes.active : "" }
            onClick={() => changeLanguage("de")} 
            style={{ cursor: "pointer" }}
          >
            <img src={deutschlandFlag} width="20" alt="deutschland flag" />
          </div>
        </div>
      </div>
    </div>
  );
}
