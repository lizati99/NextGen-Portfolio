import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import classes from "./Settings.module.css";

export default function Settings() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.settings}>
      <button onClick={() => setIsOpen(!isOpen)} className={classes.settingsButton}>
        <FontAwesomeIcon icon={faGear} size={20} />
      </button>

      {isOpen && (
        <div className={classes.settingsPanel}>
          <h3>Settings : </h3>
          <label>
            <span>Languages : </span>
            <select>
              <option value="ar">العربية</option>
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
          </label>
        </div>
      )}
    </div>
  );
}
