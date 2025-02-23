import MainHeading from "../Components/Common/MainHeading/MainHeading";
import PortfolioContent from "../Components/Portfolio/PortfolioContent";
import Close from "../Components/ui/ClosePage/Close";

export default function PortfolioPage(){
    return <>
        <div className="box">
           
            <Close />
            <MainHeading smallText="Some of my work" mainText="My" highlightedText="Portfolio"/>
            <PortfolioContent />
        </div>
    </>
}