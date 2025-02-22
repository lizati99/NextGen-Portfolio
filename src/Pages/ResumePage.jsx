import MainHeading from "../Components/Common/MainHeading/MainHeading";
import ResumeContent from "../Components/Resume/ResumeContent";
import Close from "../Components/ui/ClosePage/Close";

export default function ResumePage(){
    return <>
       <div class="box resume">
            <Close />
            <MainHeading smallText="Here's" mainText="My" highlightedText="Resume"/>
            <ResumeContent />
            <MainHeading smallText="My level of knowledge" mainText="My" highlightedText="Skills"/>
            <div class="skills">
                <div class="skill">
                    <div class="skill-head">
                        <h4>HTML</h4>
                        <span class="pc">100%</span>
                    </div>
                    <div class="range">
                        <span data-progress="100%"></span>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-head">
                        <h4>CSS</h4>
                        <span class="pc">80%</span>
                    </div>
                    <div class="range">
                        <span data-progress="90%"></span>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-head">
                        <h4>SASS</h4>
                        <span class="pc">70%</span>
                    </div>
                    <div class="range">
                        <span data-progress="70%"></span>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-head">
                        <h4>JAVASCRIPT</h4>
                        <span class="pc">85%</span>
                    </div>
                    <div class="range">
                        <span data-progress="85%"></span>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-head">
                        <h4>TYPESCRIPT</h4>
                        <span class="pc">75%</span>
                    </div>
                    <div class="range">
                        <span data-progress="75%"></span>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-head">
                        <h4>PHP</h4>
                        <span class="pc">85%</span>
                    </div>
                    <div class="range">
                        <span data-progress="85%"></span>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-head">
                        <h4>SQL</h4>
                        <span class="pc">85%</span>
                    </div>
                    <div class="range">
                        <span data-progress="85%"></span>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-head">
                        <h4>REACT JS</h4>
                        <span class="pc">40%</span>
                    </div>
                    <div class="range">
                        <span data-progress="40%"></span>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-head">
                        <h4>LARAVEL</h4>
                        <span class="pc">70%</span>
                    </div>
                    <div class="range">
                        <span data-progress="70%"></span>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-head">
                        <h4>ASP.NET Core</h4>
                        <span class="pc">90%</span>
                    </div>
                    <div class="range">
                        <span data-progress="90%"></span>
                    </div>
                </div>
            </div>
        </div>
    </>
}