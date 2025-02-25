import classes  from './ContactForm.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function ContactForm(){
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation and form submission logic goes here
    }

    return <>
        <form className={classes.contact_form} action="" method="get">
            <div className={classes.form_group}>
                <input type="text" id="name" placeholder="Enter your Name" />
                <input type="email" id="email" placeholder="Enter a valid email address" />
            </div>

            <input type="text" id="subject" placeholder="Enter your Subject" />
            <textarea id="message" cols="30" rows="5" placeholder="Write your message here..."></textarea>

            <p className={classes.error_message}></p>

            <div className={classes.button_group}>
                <button type="submit" onClick={handleSubmit} className={classes.send_button}>
                    Send <FontAwesomeIcon icon={faPaperPlane} size="md"></FontAwesomeIcon>
                </button>
            </div>
        </form>   
    </>
}