import { faExpand, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ToggleSetting.module.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../Context/ThemeContext";
import MODE from "./../../../utils/color";

export default function ToggleSetting() {
  const { isDarkMode, toggleThemeMode, toggleColors } = useContext(ThemeContext);
  const themeColors = isDarkMode ? MODE.dark : MODE.light;
  const [isOpen, setIsOpen] = useState(false);

  const displayColorList = () => {
    return themeColors.COLORS.map((color, key) => {
      return (
        <li
          key={key}
          data-color={color.color}
          data-logo={color.logo}
          style={{ backgroundColor: color.color }}
          onClick={color.logo === "" ? toggleThemeMode : () => toggleColors(color.color)}
        ></li>
      );
    });
  };

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={classes.setting_container}>
      <div className={classes.toggle_settings}>
        <FontAwesomeIcon icon={faGear} onClick={handleClick} />
      </div>
      <ul
        className={`${classes.settings} ${isOpen ? classes.show : classes.hide}`}
        id="settings"
      >
        <li data-screen="">
          <FontAwesomeIcon icon={faExpand} />
        </li>
        {displayColorList()}
      </ul>
    </div>
  );
}
