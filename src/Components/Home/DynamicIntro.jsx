import { useEffect, useRef, useState } from 'react';
import classes from './DynamicIntro.module.css'

export default function DynamicIntro(){
    const roleList = ['Web', 'Frontend', 'Backend', 'Fullstack'];
    const [currentRole, setCurrentRole] = useState('');
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    

    const handleTypingEffect = () => {
        let text=roleList[currentRoleIndex];
        if(!isDeleting){
            if(charIndex < text.length){
                setCurrentRole(text.substring(0, charIndex+1));
                setCharIndex(prevCharIndex => prevCharIndex + 1);
            }else{
                setIsDeleting(prevIsDeleted => !prevIsDeleted);
                // console.log("start deleting");
            }
        }else{
            if(charIndex > 0){
                setCurrentRole(text.substring(0, charIndex-1));
                setCharIndex(prevCharIndex => prevCharIndex - 1);
            }
            if(charIndex===0){
                // console.log("End deleting");
                setIsDeleting(prevIsDeleted => !prevIsDeleted);
                setCurrentRoleIndex( (prevIndex) => (prevIndex + 1) % roleList.length);
            }
        }
    }

    const changeTime = () => {
        if(!isDeleting)
            return 100 * Math.ceil(Math.random() * 8);
        else
            return 100 * Math.ceil(Math.random() * 4);
    }

    useEffect(()=>{
        const interval= setInterval(handleTypingEffect,changeTime());
        return ()=>{
            clearInterval(interval);
        }
        }, [charIndex, isDeleting, currentRole]);

    return <>
        <div className={classes.intro_text} id="role-container">
            <h1>Lizati Mohammed</h1>
            <p>I'm a <span className={classes.role}>{currentRole}</span> Developer</p>
        </div>
        <div className={classes.row_left}></div>
        <div className={classes.row_right}></div>
    </>
}