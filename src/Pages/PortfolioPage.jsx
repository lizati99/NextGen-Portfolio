import MainHeading from "../Components/Common/MainHeading/MainHeading";
import PortfolioContent from "../Components/Portfolio/PortfolioContent";
import Close from "../Components/ui/ClosePage/Close";

export default function PortfolioPage(){
    return <>
        <div className="box">
            {/* <div class="port-overlay">
                <div class="popup">
                    <div class="close-popup">
                        <img class="close-icon" src="img/img-core/closing.svg" alt="" height="10" />
                    </div>
                    <h2 class="popup-title">Mouse <span>over</span> me</h2>
                    <div class="popup-img"></div>
                </div>
            </div> */}
            <Close />
            <MainHeading smallText="Some of my work" mainText="My" highlightedText="Portfolio"/>
            <PortfolioContent />
        </div>
    </>
}