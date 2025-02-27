import classes  from './ContactForm.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import "./../../i18n";

export default function ContactForm(){
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation and form submission logic goes here
    }

    return <>
        <form className={classes.contact_form} action="" method="get">
            <div className={classes.form_group}>
                <input type="text" id="name" placeholder={t('contactPage.contactForm.name')} />
                <input type="email" id="email" placeholder={t('contactPage.contactForm.email')} />
            </div>

            <input type="text" id="subject" placeholder={t('contactPage.contactForm.subject')} />
            <textarea id="message" cols="30" rows="5" placeholder={t('contactPage.contactForm.message')}></textarea>

            <p className={classes.error_message}></p>

            <div className={classes.button_group}>
                <button type="submit" onClick={handleSubmit} className={classes.send_button}>
                    {t('contactPage.contactForm.submit')} <FontAwesomeIcon icon={faPaperPlane} size="md"></FontAwesomeIcon>
                </button>
            </div>
        </form>   
    </>
}