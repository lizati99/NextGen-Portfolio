
import classes from './LanguageToggle.module.css';
import { useLanguage } from "../../../Context/LanguageContext";
import moroccoFlag from "./../../../assets/icons/home/morocco.webp"
import britishFlag from "./../../../assets/icons/home/unitedkingdom.webp"
import deutschlandFlag from "./../../../assets/icons/home/germany.webp"

export default function Languages() {
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