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

export default function NavbarMobile() {
  const [activeLink, setActiveLink] = useState();
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
}, [location]);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  const displayNavLink = () => {
    const linkList = [
      { icon: <HomeIcon size={20} />,label: "Home", path: "/"},
      { icon: <AboutMeIcon size={20} />,label: "About", path: "/About"},
      { icon: <ResumeIcon size={20} />,label: "Resume", path: "/Resume"},
      { icon: <PortfolioIcon size={20} />,label: "Portfolio", path: "/Portfolio"},
      { icon: <ContactIcon size={20} />,label: "Contact", path: "/Contact"}
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