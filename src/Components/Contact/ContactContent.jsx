import classes from "./ContactContent.module.css";
import SocialHorizontalItem from "../ui/Social/SocialHorizontalItem";
import Square from "./../ui/Square/Square";
import ContactForm from "./ContactForm";
import MainHeading from "../Common/MainHeading/MainHeading";
import { useTranslation } from 'react-i18next';

export default function ContactContent() {
    const { t } = useTranslation();
    return <>
        <MainHeading 
            smallText={t('contactPage.contactContent.mainHeading.smallText')}
            mainText={t('contactPage.contactContent.mainHeading.mainText')}
            highlightedText={t('contactPage.contactContent.mainHeading.highlightedText')}
        />
        <div className={classes.contact_content}>
            <div className={classes.container}>
                <div className={classes.header_section}>
                    <h1>
                        <Square />
                        {t('contactPage.contactContent.content.title')} 
                        <span> 
                            {t('contactPage.contactContent.content.subject')}
                        </span>
                    </h1>
                    <p className={classes.form_description}>
                        {t('contactPage.contactContent.content.description')}
                    </p>
                    <SocialHorizontalItem />
                </div>
                <ContactForm />                        
            </div>
        </div>
    </>
}
