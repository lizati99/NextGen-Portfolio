import { useEffect, useState } from "react";
import classes from "./NavbarMobile.module.css";
import { Link } from "react-router-dom"; 
import { Home, Search, PieChart, Clock, User } from "lucide-react";
import { useLocation } from "react-router-dom";
import OverlayEffect from "../../ui/Overlay/OverlayEffect";

export default function NavbarMobile() {
  const [activeItem, setActiveItem]=useState("home");
  const [activeLink, setActiveLink] = useState("/");
  const [isShowOverlay, setIsShowOverlay] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
}, [location]);
  const handleClick = (path, label) => {
    setActiveLink(path);
    // setIsShowOverlay(path !== "/");
    setActiveItem(label.toLowerCase())
  };

  const displayNavLink = () => {
    const linkList = [
      { icon: <Home size={20} />,label: "Home", path: "/"},
      { icon: <Search size={20} />,label: "About", path: "/About"},
      { icon: <PieChart size={20} />,label: "Resume", path: "/Resume"},
      { icon: <Clock size={20} />,label: "Portfolio", path: "/Portfolio"},
      { icon: <User size={20} />,label: "Contact", path: "/Contact"}
    ];

    return linkList.map((link, index) => (
      <NavItem key={index} path={link.path} icon={link.icon} label={link.label} isActive={activeItem===link.label.toLowerCase() || activeLink===link.path} onClick={() => handleClick(link.path, link.label)} />
    ));
  };
  console.log(activeItem);
  return (
    <>
      <OverlayEffect isShow={isShowOverlay} />
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