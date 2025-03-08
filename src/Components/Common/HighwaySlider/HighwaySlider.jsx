import classes from './HighwaySlider.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faJs, faHtml5, 
    faStackOverflow,
    faPhp,
    faSass,
    faGithubAlt,
    faReact,
    faNodeJs,
    faLaravel,
    faCss3,
} from "@fortawesome/free-brands-svg-icons";

export default function HighwaySlider() {
    const icons = [
        faJs, faPhp, faHtml5, faSass, faGithubAlt,
        faStackOverflow, faReact, faNodeJs, faLaravel, faCss3
    ];

    return (
        <section className={classes.slide_option}>
            <div className={classes.highway_slider}>
                <div className={`${classes.container} ${classes.highway_barrier}`}>
                    <ul className={classes.highway_lane}>
                        {icons.concat(icons).map((icon, index) => (
                            <li key={index} className={classes.highway_car}>
                                <FontAwesomeIcon icon={icon} size="xl"/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
