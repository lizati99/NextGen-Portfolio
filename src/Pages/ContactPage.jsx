import HighwaySlider from "../Components/Common/HighwaySlider/HighwaySlider";
import ContactContent from "../Components/Contact/ContactContent";
import Close from "./../Components/ui/ClosePage/Close";
import Reviews from "./../Components/ui/Testimonial/Reviews";
import calculateExactAge from "../utils/calculeExactAge";
import RainFall from './../Components/ui/Effect/RainFall'
import WindEffect from './../Components/ui/Effect/WindEffect'

export default function ContactPage(){
    return <>
        <div className="background">
            <RainFall />
            <WindEffect symbols={["Mohammed Lizati", "Mohammed", "Lizati", "Developer", "Front-end", "Back-end", "Web", "Full-stack", "I am "+calculateExactAge("1999-04-08").years+" years old" ]} />
        </div>
        <div className="box">
            <Close />
            <ContactContent />
            <HighwaySlider />
            {/* <Testimonial /> */}
            <Reviews />
        </div>
    </>
}