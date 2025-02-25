import classes from "./ContactContent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignature, faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import SocialHorizontalItem from "../ui/Social/SocialHorizontalItem";
import { Link } from "react-router-dom";

export default function ContactContent() {
    return (
        <div className={classes.contact_content}>
            <div className={classes.start}>
                <div className={`${classes.nv_message}`}><Link to="#">New Message</Link></div>
                <div className={classes.header_section}>
                    <h1>Contact <span>Us</span></h1>
                    <p className={classes.form_description}>We would love to hear from you! Please fill out the form below.</p>
                    <SocialHorizontalItem />
                </div>

                <form className={`${classes.contact_form} ${classes.active}`} action="" method="get">
                    <div className={classes.form_group}>
                        <input type="text" id="name" placeholder="Enter your Name" />
                        <input type="email" id="email" placeholder="Enter a valid email address" />
                    </div>

                    <input type="text" id="subject" placeholder="Enter your Subject" />
                    <textarea id="message" cols="30" rows="5" placeholder="Write your message here..."></textarea>

                    <p className={classes.error_message}></p>

                    <div className={classes.button_group}>
                        <button type="submit" className={classes.send_button}>Send <i className="fa-solid fa-paper-plane"></i></button>
                    </div>
                </form>                           
            </div>
            <div className={classes.end}>
                <div className={classes.contact_info}>
                    
                </div>
            </div>
        </div>
    );
}
