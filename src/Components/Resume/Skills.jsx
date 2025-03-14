import { useState } from 'react';
import MainHeading from '../Common/MainHeading/MainHeading';
import classes from './Skills.module.css';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();
    const [visibleSkills, setVisibleSkills] = useState(4);

    const skills = t('resumePage.skillContent.content.skills', {returnObjects:true} ); 
    const loadMoreOrLess  = () => {
        if (visibleSkills >= skills.length) {
            setVisibleSkills(4);
        } else {
            setVisibleSkills((prev) => prev + 4);
        }
    };
    return <>
        <MainHeading 
            smallText={t('resumePage.skillContent.mainHeading.smallText')}
            mainText={t('resumePage.skillContent.mainHeading.mainText')}
            highlightedText={t('resumePage.skillContent.mainHeading.highlightedText')}
        />
        <div className={classes.skills}>
            {skills.slice(0, visibleSkills).map((skill, index) => (
                <Skill key={index} name={skill.name} percentage={skill.percentage} />
            ))}
        </div>
        <div className={classes.load}>
            <button className={classes.load_more} onClick={loadMoreOrLess}>
                {visibleSkills >= skills.length ? "Show Less" : "Load More"}
            </button>
        </div>
    </>;
}
