import { Link, useLocation } from "react-router-dom";
import classes from "./Navbar.module.css";
import homeIcon from "./../../../assets/images/Navbar/home (1).png"
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../Context/ThemeContext";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
    const { colorData } = useContext(ThemeContext);
    const [activeLink, setActiveLink] = useState("/");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();


    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const handleMenuToggle = () => {
        setIsMenuOpen(prevOpen => !prevOpen);
    };


    const handleClick = (path) => {
        setActiveLink(path);
        setIsMenuOpen(false);
    };

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
                    aria-label={link.label}
                >
                    {link.icon ? <img src={link.icon} alt={link.label} /> : link.label}
                </Link>
            </li>
        ));
    };
    return (
        <>
            { activeLink==="/" ? (
                <nav className={`${classes.navbar}`}>
                    <div className="container">
                        <div className={classes.header_area}>
                            <div className={classes.logo}>
                                <img src={colorData.logo} width="40" alt="header logo" />
                            </div>
                            <ul className={`${classes.links} ${isMenuOpen ? classes.open : ""}`}>
                                {displayNavLink()}
                            </ul>
                        </div>
                    </div>
                </nav>
            ) : (
                <>
                    <NavbarMobile />
                </>
            )}
        </>
    );
}
