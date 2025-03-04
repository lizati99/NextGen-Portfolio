import classes from "./SocialHorizontalItem.module.css";
import { displaySocialItems } from "./socialItem";

export default function SocialHorizontalItem() {
    return (
        <>
            <ul className={classes.contactList}>
                {displaySocialItems()}
            </ul>
        </>
    );
}