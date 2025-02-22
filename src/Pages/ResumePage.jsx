import MainHeading from "../Components/Common/MainHeading/MainHeading";
import ResumeContent from "../Components/Resume/ResumeContent";
import Skills from "../Components/Resume/Skills";
import Close from "../Components/ui/ClosePage/Close";

export default function ResumePage(){
    return <>
       <div class="box resume">
            <Close />
            <MainHeading smallText="Here's" mainText="My" highlightedText="Resume"/>
            <ResumeContent />
            <MainHeading smallText="My level of knowledge" mainText="My" highlightedText="Skills"/>
            <Skills />
        </div>
    </>
}