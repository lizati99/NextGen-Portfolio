import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'
import logo5 from './../../../assets/images/Navbar/logo_5.png'
export default function Navbar(){
    return <>
        <nav className={`${classes.navbar} `}>
            <div className="container">
                <div className={classes.header_area}>
                    <div className={classes.logo}>
                        <img src={logo5} width="40" alt=""/>
                    </div>
                    <ul className={classes.links}>
                        <li className={classes.logo_link}>
                            <img src="./img/img-core/icons/iconv4.png" width="40" alt=""/>
                        </li>
                        <li className={classes.close_link}>
                            <i className="fa-solid fa-angle-left"></i>
                        </li>
                        <li className={`${classes.about_link}`}><Link to="/About" className={classes.active}>About</Link></li>
                        <li className={classes.resume_link}>Resume</li>
                        <li className={classes.portofolio_link}>Portofolio</li>
                        <li className={classes.contact_link}>Contact</li>
                    </ul>
                    <button className={classes.toggle_menu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    </>
}