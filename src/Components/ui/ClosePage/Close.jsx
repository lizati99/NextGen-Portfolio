import { X as CloseIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import classes from "./Close.module.css";

export default function Close() {
    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate("/");
    };

    return (
        <div className={classes.close_box}>
            <CloseIcon onClick={handleClick} className="close_icon" size={40} />
        </div>
    );
}