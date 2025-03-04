import classes from './ResumeCard.module.css';

export default function ResumeCard({ year, title, date, description, isLeftSide }) {
    return (
        <div className={`${classes.card} ${isLeftSide ? classes.left : classes.right}`}>
            <span 
                className={`${classes.year} ${isLeftSide ? classes.yearLeftSide : classes.yearRightSide}`}
            >
                {year}
            </span>
            <h3>{title}</h3>
            <p className={classes.text}>{description}</p>
            <span className={classes.date}>{date}</span>
        </div>
    );
}