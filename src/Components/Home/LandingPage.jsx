import classes from './LandingPage.module.css'
import DynamicIntro from './DynamicIntro'
import VerticalSocialItem from '../ui/Social/SocialVerticalItem'
import ToggleSetting from '../ui/Settings/ToggleSetting'
import HomeImageWebp from './../../assets/images/Home/IMG-2.webp'

export default function LandingPage(){
    return <>
        <div className={classes.landing_page}>
            <div className={classes.landing_img}>
                <img src={HomeImageWebp} loading="lazy" alt="HomePhoto" />
            </div>
            <DynamicIntro />
            <VerticalSocialItem />
            <ToggleSetting />
        </div>
    </>
}