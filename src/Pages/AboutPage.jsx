import AboutContent from "../Components/About/AboutContent";
import ServiceWorker from "../Components/About/ServiceWorker";
import Settings from "../Components/ui/Settings/Settings";
import Close from "./../Components/ui/ClosePage/Close";

export default function AboutPage(){
    return <>
        <div className="box">
            <Close />
            <Settings />
            <AboutContent />
            <ServiceWorker />
        </div>
    </>
}