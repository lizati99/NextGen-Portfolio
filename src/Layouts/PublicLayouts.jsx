import { Outlet } from "react-router-dom";
import Footer from "../Components/Common/Footer/Footer";
import Navbar from "../Components/Common/Navbar/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function PublicLayouts(){
    const { isDarkMode, _}= useContext(ThemeContext);

    return <>
        <Navbar />
        <div className={`container`}>
            <Outlet />
        </div>
        <Footer />
    </>
}