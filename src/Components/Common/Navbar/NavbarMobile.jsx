import { useEffect, useState } from "react";
import classes from "./NavbarMobile.module.css";
import { Link } from "react-router-dom"; 
import { 
  Home as HomeIcon,
  User as AboutMeIcon, 
  Clock as ResumeIcon,
  Mail as ContactIcon, 
  PieChart as PortfolioIcon,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';


export default function NavbarMobile() {
  const [activeLink, setActiveLink] = useState();
  const location = useLocation();
  const { t } = useTranslation();
  


  useEffect(() => {
    setActiveLink(location.pathname);
}, [location]);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  const displayNavLink = () => {
    const linkList = [
      { icon: <HomeIcon size={20} />,label: t('navbar.links.home'), path: "/"},
      { icon: <AboutMeIcon size={20} />,label: t('navbar.links.about'), path: "/About"},
      { icon: <ResumeIcon size={20} />,label: t('navbar.links.resume'), path: "/Resume"},
      { icon: <PortfolioIcon size={20} />,label: t('navbar.links.portfolio'), path: "/Portfolio"},
      { icon: <ContactIcon size={20} />,label: t('navbar.links.contact'), path: "/Contact"}
    ];

    return linkList.map((link, index) => (
      <NavItem key={index} path={link.path} icon={link.icon} label={link.label} isActive={activeLink===link.path} onClick={() => handleClick(link.path, link.label)} />
    ));
  };
  return (
    <>
      <div className={classes.navbar}>
        {displayNavLink()}
      </div>
    </>
  );
}

function NavItem({ path, icon, label, isActive, onClick }) {
  return (
    <Link
      to={path} 
      className={`${classes.navItem} ${isActive ? classes.active : ""}`}
      onClick={() => onClick(path, label)}
    >
      {icon}
      {(label && isActive) && <span className={classes.label}>{label}</span>}
    </Link>
  );
}