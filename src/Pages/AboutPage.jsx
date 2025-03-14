import AboutContent from "../Components/About/AboutContent";
import ServiceWorker from "../Components/About/ServiceWorker";
import Settings from "../Components/ui/Settings/Settings";
import Close from "./../Components/ui/ClosePage/Close";
import calculateExactAge from "../utils/calculeExactAge";
import RainFall from './../Components/ui/Effect/RainFall'
import WindEffect from './../Components/ui/Effect/WindEffect'

export default function AboutPage(){
    return <>
        <div className="background">
            <RainFall />
            <WindEffect symbols={["Mohammed Lizati", "Mohammed", "Lizati", "Developer", "Front-end", "Back-end", "Web", "Full-stack", "I am "+calculateExactAge("1999-04-08").years+" years old" ]} />
        </div>
        <div className="box">
            <Close />
            <Settings />
            <AboutContent />
            <ServiceWorker />
        </div>
    </>
}