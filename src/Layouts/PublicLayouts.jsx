import { Outlet } from "react-router-dom";
import Footer from "../Components/Common/Footer/Footer";
import Navbar from "../Components/Common/Navbar/Navbar";

export default function PublicLayouts() {

  return (
    <>
      <Navbar />
      <div className={`container`}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
