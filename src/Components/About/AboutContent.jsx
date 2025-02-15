import calculateExactAge from "../../utils/calculeExactAge";
import SocialHorizontalItem from "../ui/Social/SocialHorizontalItem";
import classes from "./AboutContent.module.css"

export default function AboutContent(){
    const birthDate = "1999-08-04";
    const currentAge=calculateExactAge(birthDate)

    return <>
        <div className={classes.content_about}>
            <div className={classes.left}></div>
            <div className={classes.right}>
                <p className={classes.question}>Who am i ?</p>
                <h1>I am Lizati Mohamed</h1>
                <p className={classes.answer}>
                    a web developer, I am {currentAge.years} years old from Oujda, MA.
                    I have an email medliz185@gmail.com and my phone number is 0695283656.
                </p>
                <SocialHorizontalItem />
                <div className={classes.export}>
                    <a href="./Mohammed lizati Cv.pdf" className={classes.btn_primary}>Download CV</a>
                </div>
            </div>
        </div>
    </>
}
