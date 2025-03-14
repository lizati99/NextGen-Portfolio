import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faPinterest, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import classes from './NotFoundContent.module.css';
import { Link } from 'react-router-dom';
import { faHomeAlt } from '@fortawesome/free-solid-svg-icons';

export default function NotFoundContent() {
    return (
        <div className={classes.notfound_content}>
            <div className={classes.notfound_404}>
                <h1>404</h1>
            </div>
            <h2>
                <span className={classes.char}>P</span>age {" "}
                <span className={classes.char}>N</span>ot {" "}
                <span className={classes.char}>F</span>ound
            </h2>
            <p>
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/">
                <FontAwesomeIcon icon={faHomeAlt} />
            </Link>
            <div className={classes.notfound_content_social}>
                <Link to="#"><FontAwesomeIcon icon={faFacebook} /></Link>
                <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
                <Link to="#"><FontAwesomeIcon icon={faPinterest} /></Link>
                <Link to="#"><FontAwesomeIcon icon={faGooglePlus} /></Link>
            </div>
        </div>
    );
}
