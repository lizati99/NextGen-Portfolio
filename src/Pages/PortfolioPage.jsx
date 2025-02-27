import PortfolioContent from "../Components/Portfolio/PortfolioContent";
import Close from "../Components/ui/ClosePage/Close";

export default function PortfolioPage(){
    return <>
        <div className="box">
            <Close />
            <PortfolioContent />
        </div>
    </>
}