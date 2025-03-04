import classes from './SocialVerticalItem.module.css'
import { displaySocialItems } from "./socialItem";

export default function SocialVerticalItem(){

    return <>
        <ul className={classes.social}>
            {displaySocialItems()}
        </ul>
    </>;
}