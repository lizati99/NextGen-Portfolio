import classes from './DynamicIntro.module.css'

export default function DynamicIntro(){
    return <>
        <div className={classes.intro_text} id="role-container">
            <h1>Lizati Mohammed</h1>
            <p>I'm a <span className={classes.role} id="role"></span></p>
        </div>
        <div className={classes.row_left}></div>
        <div className={classes.row_right}></div>
    </>
}