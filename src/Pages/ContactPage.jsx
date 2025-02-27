import MainHeading from "../Components/Common/MainHeading/MainHeading";
import ContactContent from "../Components/Contact/ContactContent";
import Testimonial from "../Components/ui/Testimonial/Testimonial";
import Close from "./../Components/ui/ClosePage/Close";

export default function ContactPage(){
    return <>
        <div class="box">
            <Close />
            <ContactContent />
            <Testimonial />
        </div>
    </>
}