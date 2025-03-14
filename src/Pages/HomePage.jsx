import LandingPage from "../Components/Home/LandingPage";
import calculateExactAge from "../utils/calculeExactAge";
import RainFall from './../Components/ui/Effect/RainFall'
import WindEffect from './../Components/ui/Effect/WindEffect'

export default function HomePage(){
    return <>
        <div className="background">
            <RainFall />
            <WindEffect symbols={["Mohammed Lizati", "Mohammed", "Lizati", "Developer", "Front-end", "Back-end", "Web", "Full-stack", "I am "+calculateExactAge("1999-04-08").years+" years old" ]} />
        </div>
        <LandingPage />
    </>
}