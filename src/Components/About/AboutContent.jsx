import { useTranslation } from "react-i18next";
import calculateExactAge from "../../utils/calculeExactAge";
import MainHeading from "../Common/MainHeading/MainHeading";
import SocialHorizontalItem from "../ui/Social/SocialHorizontalItem";
import classes from "./AboutContent.module.css"

import { useLanguage } from "../../Context/LanguageContext";
import moroccoFlag from "./../../assets/icons/home/morocco.webp"
import britishFlag from "./../../assets/icons/home/unitedkingdom.webp"
import deutschlandFlag from "./../../assets/icons/home/germany.webp"
import { useState } from "react";

export default function AboutContent(){
    const { t } = useTranslation();
   

    return <>
        <MainHeading 
            smallText={t("aboutPage.aboutContent.mainHeading.smallText")} 
            mainText={t("aboutPage.aboutContent.mainHeading.mainText")}
            highlightedText={t("aboutPage.aboutContent.mainHeading.highlightedText")}
        />
        <div className={classes.content_about}>
            <div className={classes.left}></div>
            <div className={classes.right}>
                <NewProfile t={t}/>
            </div>
        </div>
    </>
}

const NewProfile=({t})=>{
    const [isExpanded, setIsExpanded] = useState(false);
    const birthDate = "1999-08-04";
    const currentAge=calculateExactAge(birthDate);
    const details = [
        { label: "Age", value: currentAge.years.toString() },
        { label: "Language", value: <Languages /> },
        { label: "Phone", value: "+123-456-7890" },
        { label: "Email", value: "ShaikhAnas@gmail.com" },
        { label: "Address", value: "Mumbai, India - 400104" },
        { label: "Freelance", value: "Available" },
      ];

    const text = `A software developer with a specialized diploma in IT development,  
        experienced in backend development using PHP, ASP.NET Core,  
        along with MySQL and SQL Server. Currently expanding my skills  
        in full-stack development with React.js and Laravel.  
        Independent and quick to adapt to new technologies.`;
    const displayText = (isExpanded) ? text : text.substring(0, 100) + '...';

    return <>
    <div className={classes.info}>
        <p className={classes.question}>
            {t("aboutPage.aboutContent.content.question")}
        </p>
        <h1>
            {t("aboutPage.aboutContent.content.name")}
        </h1>
        <p className={classes.answer}>
       
        </p>
        <p className={classes.answer}>
            {displayText}
            <span onClick={() => setIsExpanded(!isExpanded)} className={classes.expanded}>
                {isExpanded ? "read less" : "read more"}
            </span>
        </p>
        <SocialHorizontalItem />
        <div className={classes.details}>
            {details.map((item, index) => (
                <p key={index} className={classes.detailItem}>
                    <strong>{item.label}:</strong> {item.value}
                </p>
            ))}
        </div>
        <div className={classes.export}>
            <a href="./Mohammed lizati Cv.pdf" className={classes.btn_primary}>{t('aboutPage.aboutContent.content.downloadLink')}</a>
        </div>
    </div>
    </>
}


const OldProfile=(t)=>{
    // const { t } = useTranslation();
    const birthDate = "1999-08-04";
    const currentAge=calculateExactAge(birthDate);
    const city="Oujda";
    const country="Morocco";
    const email="mohammedlizati99@gmail.com";
    const phone="0695283656";
    return <>
        <p className={classes.question}>
            {t("aboutPage.aboutContent.content.question")}
        </p>
        <h1>
            {t("aboutPage.aboutContent.content.name")}
        </h1>
        <p className={classes.answer}>
            {t("aboutPage.aboutContent.content.answer", { years: currentAge.years, city: city, country:country, email:email, phone:phone})}
        </p>
        <SocialHorizontalItem />
        <div className={classes.export}>
            <a href="./Mohammed lizati Cv.pdf" className={classes.btn_primary}>{t('aboutPage.aboutContent.content.downloadLink')}</a>
        </div>
    </>
}

const Languages=()=>{
    const { changeLanguage, language } = useLanguage();
    return <>
        <div className={classes.setting_item}>
          <div 
            className={ language==="ar" ? classes.active : "" }
            onClick={() => changeLanguage("ar")} 
            style={{ cursor: "pointer" }}
          >
            <img src={moroccoFlag} width="20" alt="morocco flag" />
          </div>
          <div
            className={ language==="en" ? classes.active : "" }
            onClick={() => changeLanguage("en")}
            style={{ cursor: "pointer" }}
          >
            <img src={britishFlag} width="20" alt="british flag" />
          </div>
          <div 
            className={ language==="de" ? classes.active : "" }
            onClick={() => changeLanguage("de")} 
            style={{ cursor: "pointer" }}
          >
            <img src={deutschlandFlag} width="20" alt="deutschland flag" />
          </div>
        </div>
    </>
}