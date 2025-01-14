import { faFacebook, faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import classes from './SocialVerticalItem.module.css'

export default function SocialVerticalItem(){
    return <>
        <ul className={classes.social}>
            <li><Link href="#"><FontAwesomeIcon icon={faFacebook} /></Link></li>
            <li><Link href=""><FontAwesomeIcon icon={faWhatsapp} /></Link></li>
            <li><Link href="#"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
            <li><Link href="https://github.com/lizati99"><FontAwesomeIcon icon={faGithub} /></Link></li>
        </ul>
    </>;
}