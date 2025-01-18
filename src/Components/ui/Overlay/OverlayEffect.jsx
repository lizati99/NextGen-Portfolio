import classes from './Overlay.module.css'

export default function OverlayEffect({isShow}){
    return <>
        <div 
            className={`${classes.overlay_effect} ${ isShow ? classes.open_effect : classes.close_effect }`} 
        >

        </div>
    </>
}