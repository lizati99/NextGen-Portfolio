import { faFacebookF, faWhatsapp, faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SOCIAL_ITEM = [
    { icon: <FontAwesomeIcon icon={faFacebookF} size="lg" />, link: "https://www.facebook.com/mohammad.lizati" }, 
    { icon: <FontAwesomeIcon icon={faWhatsapp} size="lg" />, link: "https://web.whatsapp.com/" }, 
    { icon: <FontAwesomeIcon icon={faLinkedinIn} size="lg" />, link: "https://www.linkedin.com/in/mohammed-lizati-432994283/" },
    { icon: <FontAwesomeIcon icon={faGithubAlt} size="lg" />, link: "https://github.com/lizati99" },
];

export const displaySocialItems = () => {
    return SOCIAL_ITEM.map((item, index) => (
        <li key={index}>
            <Link to={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
            </Link>
        </li>
    ));
};