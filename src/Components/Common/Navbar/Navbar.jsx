import { Link, useLocation } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo5 from "./../../../assets/images/Navbar/logo_5.png";
import icon1 from "./../../../assets/icons/icon_1.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import homeIcon from "./../../../assets/images/Navbar/home (1).png"
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Navbar() {

    const [activeLink, setActiveLink] = useState("/");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const linkRef=useRef('');
    const location = useLocation();


    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const handleMenuToggle = () => {
        setIsMenuOpen( prevOpen=> !prevOpen); 
        console.log(isMenuOpen);
    };


    const handleClick = (path) => {
        setActiveLink(path);
        setIsMenuOpen(false);
    };

    const handleToggleMenu=(e)=>{
        linkRef.current.classList.toggle(classes.show);
    }

    const displayNavLink = () => {
         const linkList = [
            { label: "Home", path: "/", icon: homeIcon },
            { label: "About", path: "/About", icon: null },
            { label: "Resume", path: "/Resume", icon: null },
            { label: "Portfolio", path: "/Portfolio", icon: null },
            { label: "Contact", path: "/Contact", icon: null },
        ];

        return linkList.map((link, key) => (
            <li key={key} className={classes.linkItem}>
                <Link
                    to={link.path}
                    onClick={() => handleClick(link.path)}
                    className={
                        activeLink === link.path ? classes.active : ""
                    }
                >
                    {link.icon ? <img src={link.icon} alt={link.label} /> : link.label}
                </Link>
            </li>
        ));
    };
    return (
        <>
            <nav className={`${classes.navbar} `}>
                <div className="container">
                    <div className={classes.header_area}>
                        <div className={classes.logo}>
                            <img src={logo5} width="40" alt="" />
                        </div>
                        <ul className={`${classes.links} ${ isMenuOpen ? classes.open : ""}`}>
                            <li className={classes.logo_link}>
                                <img src={icon1} width="40" alt="navbar icon" />
                            </li>
                            <li className={classes.close_link}>
                                <FontAwesomeIcon icon={faAngleLeft}/>
                            </li>
                            {displayNavLink()}
                        </ul>
                        <button className={classes.toggle_menu} onClick={handleMenuToggle}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
