import classes from './LandingPage.module.css'
import DynamicIntro from './DynamicIntro'
import VerticalSocialItem from '../ui/Social/SocialVerticalItem'
import ToggleSetting from '../ui/Settings/ToggleSetting'

export default function LandingPage(){
    return <>
        <div className={classes.landing_page}>
            <div class={classes.landing_img}></div>
            <DynamicIntro />
            <VerticalSocialItem />
            <ToggleSetting />
        </div>
    </>
}