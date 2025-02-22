import classes from './ResumeCard.module.css';

export default function ResumeCard({ year, title, date, description }) {
    return (
        <div className={classes.card}>
            <span className={classes.year}>{year}</span>
            <h3>{title}</h3>
            <p className={classes.text}>{description}</p>
            <span className={classes.date}>{date}</span>
        </div>
    );
}