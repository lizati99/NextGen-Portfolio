import AboutContent from "../Components/About/AboutContent";
import ServiceWorker from "../Components/About/ServiceWorker";
import MainHeading from "../Components/Common/MainHeading/MainHeading";
import Close from "./../Components/ui/ClosePage/Close";

export default function AboutPage(){
    return <>
        <div className="box">
            <Close />
            <AboutContent />
            <ServiceWorker />
        </div>
    </>
}