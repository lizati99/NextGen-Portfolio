import { Link, useLocation } from "react-router-dom";
import classes from "./Navbar.module.css";
import homeIcon from "./../../../assets/images/Navbar/home (1).png"
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../Context/ThemeContext";
import NavbarMobile from "./NavbarMobile";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const { colorData } = useContext(ThemeContext);
    const [activeLink, setActiveLink] = useState("/");
    const location = useLocation();
    const { t } = useTranslation();
    const [showMobileNav, setShowMobileNav] = useState(false);
    
    const isMobile = window.innerWidth <= 768;

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    useEffect(() => {
        if (activeLink !== "/" || isMobile) {
            const timer = setTimeout(() => {
                setShowMobileNav(true);
            }, 1000);
            return () => clearTimeout(timer); 
        } else {
            setShowMobileNav(false);
        }
    }, [activeLink, isMobile]);

    const displayNavLink = () => {
        const linkList = [
            { label: t('navbar.links.home'), path: "/", icon: homeIcon },
            { label: t('navbar.links.about'), path: "/About", icon: null },
            { label: t('navbar.links.resume'), path: "/Resume", icon: null },
            { label: t('navbar.links.portfolio'), path: "/Portfolio", icon: null },
            { label: t('navbar.links.contact'), path: "/Contact", icon: null },
        ];

        return linkList.map((link, key) => (
            <li key={key} className={classes.linkItem}>
                <Link
                    to={link.path}
                    onClick={() => setActiveLink(link.path)}
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
            { activeLink==="/" && !isMobile ? (
                <nav className={`${classes.navbar}`}>
                    <div className="container">
                        <div className={classes.header_area}>
                            <div className={classes.logo}>
                                <img src={colorData.logo} width="40" alt="header logo" />
                            </div>
                            <ul className={`${classes.links}`}>
                                {displayNavLink()}
                            </ul>
                        </div>
                    </div>
                </nav>
            ) : (
                showMobileNav && <NavbarMobile />
            )}
        </>
    );
}
