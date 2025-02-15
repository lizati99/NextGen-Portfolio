import { faFacebookF, faWhatsapp, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./SocialHorizontalItem.module.css";
import { Link } from "react-router-dom";

export default function SocialHorizontalItem() {
    const contactItem = [
        { icon: faFacebookF, link: "https://www.facebook.com/mohammad.lizati" }, 
        { icon: faWhatsapp, link: "https://web.whatsapp.com/" }, 
        { icon: faLinkedinIn, link: "https://www.linkedin.com/in/mohammed-lizati-432994283/" },
        { icon: faGithub, link: "https://github.com/lizati99" },
    ];

    const displayContactItems = () => {
        return contactItem.map((item, index) => (
            <li key={index}>
                <Link href={item.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={item.icon} size="lg" />
                </Link>
            </li>
        ));
    };

    return (
        <>
            <ul className={classes.contactList}>
                {displayContactItems()}
            </ul>
        </>
    );
}