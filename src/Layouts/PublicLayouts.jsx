import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Components/Common/Navbar/Navbar";
import OverlayEffect from "../Components/ui/Overlay/OverlayEffect";
import Settings from "../Components/ui/Settings/Settings"
import NavbarMobile from "../Components/Common/Navbar/NavbarMobile";

export default function PublicLayouts() {
  const location = useLocation();
  const [isShowOverlay, setIsShowOverlay] = useState(false);

  useEffect(() => {
    setIsShowOverlay(location.pathname !== "/");
  }, [location]);
  
  return (
    <>
      <OverlayEffect isShow={isShowOverlay} />
      <Navbar />
      <NavbarMobile />
      <div className={`container`}>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
}
