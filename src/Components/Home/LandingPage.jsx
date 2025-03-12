import classes from './LandingPage.module.css'
import DynamicIntro from './DynamicIntro'
import ToggleSetting from '../ui/Settings/ToggleSetting'
import HomeImageWebp from './../../assets/images/Home/IMG-2.webp'
import SocialVerticalItem from '../ui/Social/SocialVerticalItem'
import { useState } from 'react'


export default function LandingPage(){
    const [isStopped, setIsStopped]=useState(false);
    return <>
        <div className={classes.landing_page}>
            <div className={classes.landing_img}>
                <img src={HomeImageWebp} loading="lazy" alt="HomePhoto" />
            </div>
            <DynamicIntro isStopped={isStopped} />
            <SocialVerticalItem />
            <ToggleSetting setIsStopped={setIsStopped} />
        </div>
    </>
}