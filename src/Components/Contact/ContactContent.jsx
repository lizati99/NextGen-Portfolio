import classes from "./ContactContent.module.css";
import SocialHorizontalItem from "../ui/Social/SocialHorizontalItem";
import Square from "./../ui/Square/Square";
import ContactForm from "./ContactForm";

export default function ContactContent() {
    return (
        <div className={classes.contact_content}>
            <div className={classes.container}>
                <div className={classes.header_section}>
                    <h1>
                        <Square />
                        Contact 
                        <span> Us</span>
                    </h1>
                    <p className={classes.form_description}>We would love to hear from you! Please fill out the form below.</p>
                    <SocialHorizontalItem />
                </div>
                <ContactForm />                        
            </div>
        </div>
    );
}
