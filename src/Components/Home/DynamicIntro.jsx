import { useEffect, useState } from 'react';
import classes from './DynamicIntro.module.css'
import { useTranslation } from 'react-i18next';
import "./../../i18n";

export default function DynamicIntro(){
    const { t, i18n } = useTranslation();
    const roleList = t('homePage.landing.roleList', { returnObjects: true });
    const [currentRole, setCurrentRole] = useState('');
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); 
    };

    useEffect(() => {
        changeLanguage("en")
    }, []);

    const handleTypingEffect = () => {
        let text=roleList[currentRoleIndex];
        if(!isDeleting){
            if(charIndex < text.length){
                setCurrentRole(text.substring(0, charIndex+1));
                setCharIndex(prevCharIndex => prevCharIndex + 1);
            }else{
                setIsDeleting(prevIsDeleted => !prevIsDeleted);
                // console.log("start deleting");
            }
        }else{
            if(charIndex > 0){
                setCurrentRole(text.substring(0, charIndex-1));
                setCharIndex(prevCharIndex => prevCharIndex - 1);
            }
            if(charIndex===0){
                // console.log("End deleting");
                setIsDeleting(prevIsDeleted => !prevIsDeleted);
                setCurrentRoleIndex( (prevIndex) => (prevIndex + 1) % roleList.length);
            }
        }
    }

    const changeTime = () => {
        if(!isDeleting)
            return 100 * Math.ceil(Math.random() * 8);
        else
            return 100 * Math.ceil(Math.random() * 4);
    }

    useEffect(()=>{
        const interval= setInterval(handleTypingEffect,changeTime());
        return ()=>{
            clearInterval(interval);
        }
        }, [charIndex, isDeleting, currentRole]);

    return <>
        <div className={classes.intro_text} id="role-container">
            <h1>
                <span className={classes.role}>{t('homePage.landing.lastName')} </span>
                {t('homePage.landing.firstName')}
            </h1>
            <p>
                {t('homePage.landing.subject')}
                <span className={classes.role}> {currentRole} </span>
                {t('homePage.landing.lastRole')}
            </p>
        </div>
        <div className={classes.row_left}></div>
        <div className={classes.row_right}></div>
    </>
}