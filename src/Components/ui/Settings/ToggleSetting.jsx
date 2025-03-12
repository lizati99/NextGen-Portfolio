import { faExpand, faGear, faPauseCircle, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ToggleSetting.module.css";
import LanguageToggle from "../Languages/LanguageToggle";
import ColorToggle from "../ColorToggle/ColorToggle";
import { useState } from "react";

export default function ToggleSetting({ setIsStopped }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // دالة لتفعيل وإيقاف وضع الشاشة الكاملة
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.log(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className={classes.setting_container}>
      <div className={classes.toggle_settings} onClick={handleClick}>
        <FontAwesomeIcon icon={faGear} size="lg" />
      </div>
      <div
        className={`${classes.settings} ${isOpen ? classes.show : classes.hide}`}
        id="settings"
      >
        <h3 className={classes.setting_title}>Full Screen :</h3>
        <div className={classes.setting_item} onClick={toggleFullScreen}>
          <FontAwesomeIcon icon={faExpand} size="lg" />
        </div>

        <h3 className={classes.setting_title}>Colors & Theme :</h3>
        <ColorToggle />

        <h3 className={classes.setting_title}>Languages :</h3>
        <LanguageToggle />

        <h3 className={classes.setting_title}>Dynamic Introduction :</h3>
        <div className={classes.setting_item}>
          <FontAwesomeIcon
            icon={faPauseCircle}
            className={`${classes.control} ${classes.active}`}
            size="lg"
            onClick={() => setIsStopped(true)}
          />
          <FontAwesomeIcon
            icon={faPlayCircle}
            className={`${classes.control} ${classes.active}`}
            size="lg"
            onClick={() => setIsStopped(false)}
          />
        </div>
      </div>
    </div>
  );
}
