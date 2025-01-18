import classes from './MainHeading.module.css'

export default function MainHeading({smallText, mainText, highlightedText}){
    return <>
        <div className={classes.main_heading}>
            <p className={classes.small_text}>{smallText}</p>
            <h1 className={classes.main_text}>
                {mainText} <span className={classes.highlighted_text}>{highlightedText}</span>
            </h1>
            <div className={classes.underline}></div>
        </div>
    </>;
}