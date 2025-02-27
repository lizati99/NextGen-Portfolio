import ResumeContent from "../Components/Resume/ResumeContent";
import Skills from "../Components/Resume/Skills";
import Close from "../Components/ui/ClosePage/Close";

export default function ResumePage(){
    return <>
       <div className="box">
            <Close />
            <ResumeContent />
            <Skills />
        </div>
    </>
}