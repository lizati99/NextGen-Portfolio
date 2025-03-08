import HighwaySlider from "../Components/Common/HighwaySlider/HighwaySlider";
import ContactContent from "../Components/Contact/ContactContent";
import Close from "./../Components/ui/ClosePage/Close";
import Reviews from "./../Components/ui/Testimonial/Reviews"

export default function ContactPage(){
    return <>
        <div className="box">
            <Close />
            <ContactContent />
            <HighwaySlider />
            {/* <Testimonial /> */}
            <Reviews />
        </div>
    </>
}