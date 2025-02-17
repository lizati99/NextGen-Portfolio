import AboutContent from "../Components/About/AboutContent";
import ServiceWorker from "../Components/About/ServiceWorker";
import MainHeading from "../Components/Common/MainHeading/MainHeading";
import Testimonial from "../Components/ui/Testimonial/Testimonial";
import Close from "./../Components/ui/ClosePage/Close"
export default function AboutPage(){
    return <>
        <div className="box">
            <Close />
            <div>
                <MainHeading smallText="know" mainText="About" highlightedText="Me"/>
                <AboutContent />
                {/* Service Section */}
                <ServiceWorker />
            </div>
        </div>
    </>
}