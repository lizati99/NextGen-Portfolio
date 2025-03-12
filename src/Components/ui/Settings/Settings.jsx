import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import classes from "./Settings.module.css";
import Languages from "../Languages/LanguageToggle";
import ColorToggle from "../ColorToggle/ColorToggle";

export default function Settings() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${classes.settings} ${(isOpen) ? classes.open : ''}`}>
      <div className={classes.settings_toggle} onClick={handleClick}>
        <FontAwesomeIcon icon={faGear} className={(isOpen) ? "fa-spin" : ''} />
      </div>
      <div className={classes.settings_content}>
        <div className={classes.option_box}>
          <h4>
            Colors
          </h4>
          <ColorToggle />
        </div>
        <div className={classes.option_box}>
          <h4>
            Languages
          </h4>
          <Languages />
        </div>
        <div className={classes.option_box}>
          <h4>
            Stop Dynamic Introduction
          </h4>
          <span className={classes.option_btn}>Yes</span>
          <span className={`${classes.option_btn} ${classes.active}`}>No</span>
        </div>
      </div>
    </div>
  );
}
