import classes from './Skills.module.css';

function Skill({ name, percentage }) {
    return (
        <div className={classes.skill}>
            <div className={classes.skill_head}>
                <h4>{name}</h4>
                <span className={classes.pc}>{percentage}%</span>
            </div>
            <div className={classes.range}>
                <span style={{ width: `${percentage}%` }}></span>
            </div>
        </div>
    );
}

export default function Skills() {
    const skills = [
        { name: 'HTML', percentage: 100 },
        { name: 'CSS', percentage: 90 },
        { name: 'SASS', percentage: 80 },
        { name: 'JAVASCRIPT', percentage: 85 },
        { name: 'TYPESCRIPT', percentage: 75 },
        { name: 'REACT JS', percentage: 80 },
        { name: 'PHP', percentage: 85 },
        { name: 'LARAVEL', percentage: 80 },
        { name: 'ASP.NET Core', percentage: 85 },
        { name: 'SQL', percentage: 85 },
    ];

    return (
        <div className={classes.skills}>
            {skills.map((skill, index) => (
                <Skill key={index} name={skill.name} percentage={skill.percentage} />
            ))}
        </div>
    );
}
