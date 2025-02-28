import { useTranslation } from "react-i18next";
import calculateExactAge from "../../utils/calculeExactAge";
import MainHeading from "../Common/MainHeading/MainHeading";
import SocialHorizontalItem from "../ui/Social/SocialHorizontalItem";
import classes from "./AboutContent.module.css"

export default function AboutContent(){
    const { t } = useTranslation();
    const birthDate = "1999-08-04";
    const currentAge=calculateExactAge(birthDate);
    const city="Oujda";
    const country="Morocco";
    const email="mohammedlizati99@gmail.com";
    const phone="0695283656";

    return <>
        <MainHeading 
            smallText={t("aboutPage.aboutContent.mainHeading.smallText")} 
            mainText={t("aboutPage.aboutContent.mainHeading.mainText")}
            highlightedText={t("aboutPage.aboutContent.mainHeading.highlightedText")}
        />
        <div className={classes.content_about}>
            <div className={classes.left}></div>
            <div className={classes.right}>
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
            </div>
        </div>
    </>
}
