import { faExpand, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ToggleSetting.module.css"

export default function ToggleSetting(){
    return <>
        <div className={classes.toggle_settings}>
            <FontAwesomeIcon icon={faGear} />
        </div>
        <ul className={classes.settings}>
            <li data-screen=""><FontAwesomeIcon icon={faExpand} /></li>
            {/* <li data-color="#3f51b5"></li>  */}
            <li data-color="#00bcd4" data-logo="3"></li>
            {/* <li data-color="#ffc107"></li> */}
            <li data-color="#ffc107" data-logo="2"></li>
            <li data-color="#ba021d" data-logo="1"></li>
        </ul>
    </>
}