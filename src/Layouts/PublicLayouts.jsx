import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Components/Common/Navbar/Navbar";
import OverlayEffect from "../Components/ui/Overlay/OverlayEffect";

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
      <div className={`container`}>
        {/* <Settings /> */}
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
}
