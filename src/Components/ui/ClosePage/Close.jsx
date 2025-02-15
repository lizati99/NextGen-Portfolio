import { X as CloseIcon } from "lucide-react";
import classes from "./Close.module.css"

export default function Close(){
    return <>
        <div className={classes.close_box}>
            <CloseIcon className="close_icon" size={40} />
        </div>
    </>
}