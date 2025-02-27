import Square from './../ui/Square/Square'
import ResumeCard from './ResumeCard';
import classes from './ResumeContent.module.css';
import { useTranslation } from 'react-i18next';
import "./../../i18n";
import { useEffect } from 'react'
import MainHeading from '../Common/MainHeading/MainHeading';

export default function ResumeContent() {
    const { t, i18n } = useTranslation();
       
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); 
    };

    useEffect(()=>{
        changeLanguage("en");
    }, []);    
    const educationData = t('resumePage.resumeContent.content.education', { returnObjects: true } )
    const experienceData = t('resumePage.resumeContent.content.experience', { returnObjects: true } )

    return <>
        <MainHeading 
            smallText={t('resumePage.resumeContent.mainHeading.smallText')} 
            mainText={t('resumePage.resumeContent.mainHeading.mainText')} 
            highlightedText={t('resumePage.resumeContent.mainHeading.highlightedText')}
        />
        <div className={classes.resume_content}>
            <div className={classes.education}>
                <div className={classes.header}>
                    <Square />
                    {t('resumePage.resumeContent.content.titleEducation')}
                </div>
                {educationData.map((item, index) => (
                    <ResumeCard key={index} {...item} />
                ))}
            </div>
            <div className={classes.experience}>
                <div className={classes.header}>
                    <Square />
                    {t('resumePage.resumeContent.content.titleExperience')}
                </div>
                {experienceData.map((item, index) => (
                    <ResumeCard key={index} {...item} />
                ))}
            </div>
        </div>
    </>;
}
